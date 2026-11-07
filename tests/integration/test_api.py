import pytest
from apps.api.main import app
from fastapi.testclient import TestClient

client = TestClient(app)

def test_health_endpoint():
    res = client.get("/health")
    assert res.status_code == 200
    data = res.json()
    assert data["status"] == "healthy"
    assert "services" in data

def test_get_institutions():
    res = client.get("/institutions")
    assert res.status_code == 200
    assert len(res.json()) >= 2

def test_get_fdrs():
    res = client.get("/fdrs")
    assert res.status_code == 200
    assert len(res.json()) >= 2

def test_verify_fdr_mismatch_detection():
    res = client.post("/fdrs/fdr-benchmark-2/verify")
    assert res.status_code == 200
    data = res.json()
    assert data["status"] == "MISMATCH"
    assert len(data["discrepancies"]) > 0

def test_rules_pack_endpoint():
    res = client.get("/rules")
    assert res.status_code == 200
    data = res.json()
    assert data["pack_id"] == "aicte-fdr-regulatory-pack-v1"
