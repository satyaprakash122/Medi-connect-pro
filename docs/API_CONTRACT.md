# MediConnect API Contract (Backend v1.0)

## Base URL

http://localhost:8080

---

# Authentication

## Register User

### Endpoint

POST /api/auth/register

### Request

```json
{
  "name": "Satya Prakash",
  "email": "satya@gmail.com",
  "password": "password123",
  "role": "PATIENT"
}
```

### Response

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": null
}
```

---

## Login

### Endpoint

POST /api/auth/login

### Request

```json
{
  "email": "satya@gmail.com",
  "password": "password123"
}
```

### Response

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token",
    "email": "satya@gmail.com",
    "role": "PATIENT"
  }
}
```

---

# User

## Get Profile

### Endpoint

GET /api/users/profile

### Headers

Authorization: Bearer JWT_TOKEN

### Response

```json
{
  "success": true,
  "message": "Profile fetched successfully",
  "data": "Welcome to MediConnect"
}
```

---

# Doctor Module

## Create Doctor Profile

### Endpoint

POST /api/doctors

### Headers

Authorization: Bearer JWT_TOKEN

### Request

```json
{
  "specialization": "Cardiology",
  "qualification": "MBBS, MD",
  "experience": 5,
  "consultationFee": 500
}
```

### Response

```json
{
  "success": true,
  "message": "Doctor profile created successfully",
  "data": null
}
```

---

## Search Doctors By Specialization

### Endpoint

GET /api/doctors/specialization/{specialization}

### Example

GET /api/doctors/specialization/Cardiology

### Response

```json
{
  "success": true,
  "message": "Doctors fetched successfully",
  "data": [...]
}
```

---

# Appointment Module

## Book Appointment

### Endpoint

POST /api/appointments

### Headers

Authorization: Bearer JWT_TOKEN

### Request

```json
{
  "doctorId": 1,
  "appointmentDate": "2026-06-20",
  "appointmentTime": "10:00:00",
  "reason": "Fever and headache"
}
```

### Response

```json
{
  "success": true,
  "message": "Appointment booked successfully",
  "data": null
}
```

---

## Get My Appointments

### Endpoint

GET /api/appointments/my

### Headers

Authorization: Bearer JWT_TOKEN

### Response

```json
{
  "success": true,
  "message": "Appointments fetched successfully",
  "data": [...]
}
```

---

## Get Doctor Appointments

### Endpoint

GET /api/appointments/doctor

### Headers

Authorization: Bearer JWT_TOKEN

### Role Required

DOCTOR

### Response

```json
{
  "success": true,
  "message": "Doctor appointments fetched successfully",
  "data": [...]
}
```

---

## Approve Appointment

### Endpoint

PUT /api/appointments/{appointmentId}/approve

### Headers

Authorization: Bearer JWT_TOKEN

### Role Required

DOCTOR

### Response

```json
{
  "success": true,
  "message": "Appointment approved successfully",
  "data": null
}
```

---

## Reject Appointment

### Endpoint

PUT /api/appointments/{appointmentId}/reject

### Headers

Authorization: Bearer JWT_TOKEN

### Role Required

DOCTOR

### Response

```json
{
  "success": true,
  "message": "Appointment rejected successfully",
  "data": null
}
```

---

# Roles

Supported roles:

* PATIENT
* DOCTOR
* HOSPITAL
* VENDOR
* SERVICE_ENGINEER
* ADMIN

---

# Authentication

All protected endpoints require:

Authorization: Bearer JWT_TOKEN

---

# Standard Response Format

Success:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Error description",
  "data": null
}
```
