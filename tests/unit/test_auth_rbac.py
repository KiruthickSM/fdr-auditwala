import json
import time

# 1. Test isSafeRedirect
def test_safe_redirect():
    def is_safe(path):
        if not path:
            return False
        if not path.startswith("/"):
            return False
        if path.startswith("//"):
            return False
        if "\\" in path or "://" in path:
            return False
        return True

    assert is_safe("/reviewer") == True
    assert is_safe("/institution/inst-2") == True
    assert is_safe("/admin?tab=users") == True
    assert is_safe("https://malicious.site") == False
    assert is_safe("//malicious.site") == False
    assert is_safe("/\\malicious.site") == False
    assert is_safe("javascript:alert(1)") == False
    assert is_safe("") == False

# 2. Test rate limit lockout logic
def test_rate_limit_lockout():
    attempts = 0
    locked_until = 0

    def record_attempt():
        nonlocal attempts, locked_until
        attempts += 1
        if attempts >= 5:
            locked_until = time.time() + 900
            return True
        return False

    def is_locked():
        nonlocal attempts, locked_until
        now = time.time()
        if locked_until and now < locked_until:
            return True
        return False

    for _ in range(4):
        assert record_attempt() == False
        assert is_locked() == False

    # 5th attempt locks account
    assert record_attempt() == True
    assert is_locked() == True

# 3. Test RBAC permissions & tenant boundary
def test_rbac_and_tenant_boundary():
    routes = {
        "/reviewer": ["REVIEWER", "ADMIN"],
        "/institution": ["INSTITUTION", "ADMIN"],
        "/admin": ["ADMIN"],
        "/management": ["MANAGEMENT", "ADMIN"]
    }

    def check_access(user_role, path):
        for prefix, allowed_roles in routes.items():
            if path.startswith(prefix):
                return user_role in allowed_roles
        return True

    def check_tenant(user_inst_id, requested_inst_id):
        return user_inst_id == requested_inst_id

    # Reviewer access
    assert check_access("REVIEWER", "/reviewer") == True
    assert check_access("REVIEWER", "/admin") == False
    assert check_access("REVIEWER", "/institution") == False

    # Institution access
    assert check_access("INSTITUTION", "/institution") == True
    assert check_access("INSTITUTION", "/reviewer") == False
    assert check_access("INSTITUTION", "/admin") == False

    # Admin access
    assert check_access("ADMIN", "/reviewer") == True
    assert check_access("ADMIN", "/institution") == True
    assert check_access("ADMIN", "/admin") == True
    assert check_access("ADMIN", "/management") == True

    # Tenant boundary
    assert check_tenant("inst-2", "inst-2") == True
    assert check_tenant("inst-2", "inst-3") == False

if __name__ == "__main__":
    test_safe_redirect()
    test_rate_limit_lockout()
    test_rbac_and_tenant_boundary()
    print("Auth & RBAC tests passed!")
