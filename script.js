document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const employeeId = document.getElementById("employeeId").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (employeeId === "" || password === "") {
        document.getElementById("loginMessage").textContent =
            "Please enter Employee ID and Password.";
        return;
    }

    localStorage.setItem("employeeId", employeeId);
    localStorage.setItem("role", role);

    if (role === "employee") {
        window.location.href = "employee.html";
    } else {
        window.location.href = "admin.html";
    }
});
function showSection(section) {

    const content = document.getElementById("contentSection");

    if (section === "profile") {

        content.innerHTML = `
            <h2>My Profile</h2>

            <div class="profile-info">
                <p><strong>Employee ID:</strong> ${localStorage.getItem("employeeId")}</p>
                <p><strong>Name:</strong> Rahul Sharma</p>
                <p><strong>Email:</strong> rahul@dayflow.com</p>
                <p><strong>Phone:</strong> +91 9876543210</p>
                <p><strong>Department:</strong> Engineering</p>
                <p><strong>Job Position:</strong> Software Developer</p>
            </div>
        `;

    }

    else if (section === "attendance") {

        content.innerHTML = `
            <h2>Attendance</h2>

            <p><strong>Today's Status:</strong> Present</p>

            <button onclick="checkIn()">Check In</button>
            <button onclick="checkOut()">Check Out</button>

            <h3 style="margin-top:25px;">Attendance History</h3>

            <p>22 Aug 2026 - Present</p>
            <p>21 Aug 2026 - Present</p>
            <p>20 Aug 2026 - Leave</p>
        `;

    }

    else if (section === "leave") {

        content.innerHTML = `
            <h2>Apply for Leave</h2>

            <label>Leave Type</label>

            <select id="leaveType">
                <option>Paid Leave</option>
                <option>Sick Leave</option>
                <option>Unpaid Leave</option>
            </select>

            <label>From Date</label>

            <input type="date" id="fromDate">

            <label>To Date</label>

            <input type="date" id="toDate">

            <label>Reason</label>

            <input type="text" id="leaveReason" placeholder="Enter reason">

            <button onclick="applyLeave()">Submit Leave Request</button>

            <p id="leaveMessage"></p>
        `;

    }

    else if (section === "salary") {

        content.innerHTML = `
            <h2>My Salary</h2>

            <p><strong>Basic Salary:</strong> ₹35,000</p>
            <p><strong>Allowances:</strong> ₹10,000</p>
            <p><strong>Deductions:</strong> ₹5,000</p>
            <hr>
            <p><strong>Net Salary:</strong> ₹40,000</p>

            <p style="margin-top:15px;">
                Salary information is read-only for employees.
            </p>
        `;
    }
}

function checkIn() {

    localStorage.setItem("checkIn", new Date().toLocaleTimeString());

    alert("Check-in recorded successfully!");
}

function checkOut() {

    localStorage.setItem("checkOut", new Date().toLocaleTimeString());

    alert("Check-out recorded successfully!");
}

function applyLeave() {

    const type = document.getElementById("leaveType").value;
    const from = document.getElementById("fromDate").value;
    const to = document.getElementById("toDate").value;
    const reason = document.getElementById("leaveReason").value;

    if (!from || !to || !reason) {

        document.getElementById("leaveMessage").textContent =
            "Please fill all fields.";

        return;
    }

    localStorage.setItem("leaveType", type);
    localStorage.setItem("leaveFrom", from);
    localStorage.setItem("leaveTo", to);
    localStorage.setItem("leaveReason", reason);
    localStorage.setItem("leaveStatus", "Pending");

    document.getElementById("leaveMessage").textContent =
        "Leave request submitted successfully!";
}

function logout() {

    localStorage.removeItem("employeeId");
    localStorage.removeItem("role");

    window.location.href = "index.html";
}
function showAdminSection(section) {

    const content = document.getElementById("adminContent");

    if (section === "employees") {

        content.innerHTML = `
            <h2>Employee Management</h2>

            <div class="profile-info">

                <p>
                    <strong>EMP001</strong><br>
                    Rahul Sharma<br>
                    Software Developer
                </p>

                <p>
                    <strong>EMP002</strong><br>
                    Ananya Rao<br>
                    UI/UX Designer
                </p>

                <p>
                    <strong>EMP003</strong><br>
                    Arjun Kumar<br>
                    Backend Developer
                </p>

                <p>
                    <strong>EMP004</strong><br>
                    Priya Singh<br>
                    HR Executive
                </p>

            </div>
        `;

    }

    else if (section === "attendance") {

        content.innerHTML = `
            <h2>Today's Attendance</h2>

            <div class="profile-info">

                <p>
                    <strong>Total Employees</strong><br>
                    42
                </p>

                <p>
                    <strong>Present</strong><br>
                    36
                </p>

                <p>
                    <strong>Absent</strong><br>
                    4
                </p>

                <p>
                    <strong>On Leave</strong><br>
                    2
                </p>

            </div>

            <h3 style="margin-top:25px;">
                Attendance Records
            </h3>

            <p>
                EMP001 — Rahul Sharma — Present — 09:02 AM
            </p>

            <p>
                EMP002 — Ananya Rao — Present — 09:15 AM
            </p>

            <p>
                EMP003 — Arjun Kumar — Absent
            </p>
        `;

    }

    else if (section === "leave") {

        content.innerHTML = `
            <h2>Leave Requests</h2>

            <div class="profile-info">

                <p>
                    <strong>Rahul Sharma</strong><br>
                    Paid Leave<br>
                    24 Aug - 25 Aug<br>
                    <strong>Status:</strong> Pending
                </p>

                <p>
                    <strong>Ananya Rao</strong><br>
                    Sick Leave<br>
                    23 Aug<br>
                    <strong>Status:</strong> Pending
                </p>

            </div>

            <button onclick="approveLeave()">
                Approve Selected Request
            </button>

            <p id="leaveApprovalMessage"></p>
        `;

    }

    else if (section === "payroll") {

        content.innerHTML = `
            <h2>Payroll Management</h2>

            <div class="profile-info">

                <p>
                    <strong>Rahul Sharma</strong><br>
                    Basic: ₹35,000<br>
                    Allowances: ₹10,000<br>
                    Net Salary: ₹40,000
                </p>

                <p>
                    <strong>Ananya Rao</strong><br>
                    Basic: ₹38,000<br>
                    Allowances: ₹8,000<br>
                    Net Salary: ₹41,000
                </p>

            </div>

            <p style="margin-top:20px;">
                Payroll information is managed by HR/Admin.
            </p>
        `;
    }
}


function approveLeave() {

    document.getElementById("leaveApprovalMessage").textContent =
        "Leave request approved successfully!";
}