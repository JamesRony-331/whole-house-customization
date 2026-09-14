from django.test import SimpleTestCase


class HealthApiTests(SimpleTestCase):
    def test_health_endpoint_returns_unified_success_response(self):
        response = self.client.get("/api/health/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.json(),
            {
                "code": 200,
                "message": "success",
                "data": {"status": "ok", "service": "whole-house-api"},
            },
        )
