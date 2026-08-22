/* ================= LOGIN ================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const employeeId =
            document.getElementById("employeeId").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const role =
            document.getElementById("role").value;

        const message =
            document.getElementById("loginMessage");


        if (employeeId === "" || password === "") {

            message.textContent =
                "Please enter your Employee ID and Password.";

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

}


/* ================= LOGOUT ================= */

function logout() {

    localStorage.removeItem("employeeId");
    localStorage.removeItem("role");

    window.location.href = "index.html";
}


/* ================= EMPLOYEE ================= */

function showEmployeeSection(section) {

    const content =
        document.getElementById("employeeContent");

    if (!content) return;


    if (section === "overview") {

        content.innerHTML = `

            <div class="page-header">
                <h1>Employee Portal</h1>
                <p>Your personal Dayflow workspace</p>
            </div>

            <div class="welcome-card">

                <h1>Good morning 👋</h1>

                <p>
                    Welcome back to your Dayflow workspace.
                </p>

            </div>


            <div class="profile-card">

                <div class="profile-top">

                    <div class="large-avatar">
                        R
                    </div>

                    <div>
                        <h2>Rahul Sharma</h2>
                        <p>Software Developer</p>
                    </div>

                </div>


                <div class="profile-details">

                    <div class="detail-box">
                        <span>Employee ID</span>
                        <strong>
                            ${localStorage.getItem("employeeId") || "EMP001"}
                        </strong>
                    </div>

                    <div class="detail-box">
                        <span>Department</span>
                        <strong>Engineering</strong>
                    </div>

                    <div class="detail-box">
                        <span>Today's Status</span>
                        <strong>
                            <span class="badge present">
                                Present
                            </span>
                        </strong>
                    </div>

                    <div class="detail-box">
                        <span>Work Location</span>
                        <strong>Office</strong>
                    </div>

                </div>

            </div>

        `;

    }


    else if (section === "profile") {

        content.innerHTML = `

            <div class="page-header">
                <h1>My Profile</h1>
                <p>View your personal and professional information.</p>
            </div>

            <div class="profile-card">

                <div class="profile-top">

                    <div class="large-avatar">
                        R
                    </div>

                    <div>
                        <h2>Rahul Sharma</h2>
                        <p>Software Developer</p>
                    </div>

                </div>


                <div class="profile-details">

                    <div class="detail-box">
                        <span>Employee ID</span>
                        <strong>
                            ${localStorage.getItem("employeeId") || "EMP001"}
                        </strong>
                    </div>

                    <div class="detail-box">
                        <span>Full Name</span>
                        <strong>Rahul Sharma</strong>
                    </div>

                    <div class="detail-box">
                        <span>Email</span>
                        <strong>rahul@dayflow.com</strong>
                    </div>

                    <div class="detail-box">
                        <span>Phone</span>
                        <strong>+91 9876543210</strong>
                    </div>

                    <div class="detail-box">
                        <span>Department</span>
                        <strong>Engineering</strong>
                    </div>

                    <div class="detail-box">
                        <span>Job Position</span>
                        <strong>Software Developer</strong>
                    </div>

                    <div class="detail-box">
                        <span>Joining Date</span>
                        <strong>15 June 2024</strong>
                    </div>

                    <div class="detail-box">
                        <span>Employment Type</span>
                        <strong>Full Time</strong>
                    </div>

                </div>

            </div>

        `;

    }


    else if (section === "attendance") {

        content.innerHTML = `

            <div class="page-header">
                <h1>Attendance</h1>
                <p>Track your daily attendance and working hours.</p>
            </div>


            <div class="stats-grid">

                <div class="stat-card">
                    <p>Today's Status</p>
                    <h3>
                        <span class="badge present">
                            Present
                        </span>
                    </h3>
                </div>

                <div class="stat-card">
                    <p>Check In</p>
                    <h3 id="checkInTime">
                        ${localStorage.getItem("checkIn") || "--:--"}
                    </h3>
                </div>

                <div class="stat-card">
                    <p>Check Out</p>
                    <h3 id="checkOutTime">
                        ${localStorage.getItem("checkOut") || "--:--"}
                    </h3>
                </div>

                <div class="stat-card">
                    <p>Attendance Rate</p>
                    <h3>95%</h3>
                </div>

            </div>


            <div class="content-card">

                <h2>Today's Attendance</h2>

                <p>
                    Mark your attendance for today.
                </p>

                <div class="button-row" style="margin-top:20px;">

                    <button
                        class="action-btn"
                        onclick="checkIn()">
                        Check In
                    </button>

                    <button
                        class="secondary-btn"
                        onclick="checkOut()">
                        Check Out
                    </button>

                </div>

            </div>


            <div class="content-card">

                <h2>Attendance History</h2>

                <div class="table-wrapper">

                    <table>

                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>22 Aug 2026</td>
                                <td>09:02 AM</td>
                                <td>06:05 PM</td>
                                <td>
                                    <span class="badge present">
                                        Present
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>21 Aug 2026</td>
                                <td>09:10 AM</td>
                                <td>06:12 PM</td>
                                <td>
                                    <span class="badge present">
                                        Present
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>20 Aug 2026</td>
                                <td>--</td>
                                <td>--</td>
                                <td>
                                    <span class="badge leave">
                                        Leave
                                    </span>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        `;

    }


    else if (section === "leave") {

        content.innerHTML = `

            <div class="page-header">
                <h1>Leave Requests</h1>
                <p>Apply for leave and track your requests.</p>
            </div>


            <div class="content-card">

                <h2>Apply for Leave</h2>

                <div class="form-grid">

                    <div class="form-group">

                        <label>Leave Type</label>

                        <select id="leaveType">
                            <option>Paid Leave</option>
                            <option>Sick Leave</option>
                            <option>Unpaid Leave</option>
                        </select>

                    </div>


                    <div class="form-group">

                        <label>Reason</label>

                        <input
                            type="text"
                            id="leaveReason"
                            placeholder="Enter reason">

                    </div>


                    <div class="form-group">

                        <label>From Date</label>

                        <input
                            type="date"
                            id="fromDate">

                    </div>


                    <div class="form-group">

                        <label>To Date</label>

                        <input
                            type="date"
                            id="toDate">

                    </div>

                </div>


                <button
                    class="action-btn"
                    style="margin-top:20px;"
                    onclick="applyLeave()">

                    Submit Leave Request

                </button>

                <p id="leaveMessage"></p>

            </div>


            <div class="content-card">

                <h2>My Leave History</h2>

                <div class="table-wrapper">

                    <table>

                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Reason</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody id="leaveHistory">

                            <tr>
                                <td>Paid Leave</td>
                                <td>24 Aug 2026</td>
                                <td>25 Aug 2026</td>
                                <td>Personal work</td>
                                <td>
                                    <span class="badge pending">
                                        Pending
                                    </span>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        `;

    }


    else if (section === "salary") {

        content.innerHTML = `

            <div class="page-header">
                <h1>My Salary</h1>
                <p>View your monthly salary information.</p>
            </div>


            <div class="content-card">

                <h2>Salary Details</h2>

                <div class="table-wrapper">

                    <table>

                        <thead>

                            <tr>
                                <th>Employee</th>
                                <th>Basic</th>
                                <th>Allowances</th>
                                <th>Deductions</th>
                                <th>Net Salary</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>
                                    <strong>Rahul Sharma</strong>
                                </td>

                                <td>₹35,000</td>

                                <td>₹10,000</td>

                                <td>₹5,000</td>

                                <td class="salary-total">
                                    ₹40,000
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>


            <div class="content-card">

                <h2>Salary Summary</h2>

                <div class="profile-details">

                    <div class="detail-box">
                        <span>Basic Salary</span>
                        <strong>₹35,000</strong>
                    </div>

                    <div class="detail-box">
                        <span>Allowances</span>
                        <strong>₹10,000</strong>
                    </div>

                    <div class="detail-box">
                        <span>Deductions</span>
                        <strong>₹5,000</strong>
                    </div>

                    <div class="detail-box">
                        <span>Net Salary</span>
                        <strong>₹40,000</strong>
                    </div>

                </div>

            </div>

        `;

    }

}


/* ================= EMPLOYEE ACTIONS ================= */

function checkIn() {

    const time = new Date().toLocaleTimeString();

    localStorage.setItem("checkIn", time);

    alert("Check-in recorded successfully!");

    showEmployeeSection("attendance");
}


function checkOut() {

    const time = new Date().toLocaleTimeString();

    localStorage.setItem("checkOut", time);

    alert("Check-out recorded successfully!");

    showEmployeeSection("attendance");
}


function applyLeave() {

    const type =
        document.getElementById("leaveType").value;

    const from =
        document.getElementById("fromDate").value;

    const to =
        document.getElementById("toDate").value;

    const reason =
        document.getElementById("leaveReason").value.trim();


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


/* ================= ADMIN ================= */

function showAdminSection(section) {

    const content =
        document.getElementById("adminContent");

    if (!content) return;


    if (section === "overview") {

        content.innerHTML = `

            <div class="page-header">
                <h1>HR Dashboard</h1>
                <p>Overview of your workforce.</p>
            </div>


            <div class="welcome-card">

                <h1>Good morning, HR Admin 👋</h1>

                <p>
                    Manage your workforce, attendance,
                    leave and payroll from one place.
                </p>

            </div>


            <div class="stats-grid">

                <div class="stat-card">
                    <p>Total Employees</p>
                    <h2>42</h2>
                </div>

                <div class="stat-card">
                    <p>Present Today</p>
                    <h2>36</h2>
                </div>

                <div class="stat-card">
                    <p>On Leave</p>
                    <h2>2</h2>
                </div>

                <div class="stat-card">
                    <p>Pending Requests</p>
                    <h2>4</h2>
                </div>

            </div>


            <div class="notification">

                🔔 <strong>Notifications:</strong>

                4 leave requests are waiting
                for HR approval.

            </div>


            <div class="content-card">

                <h2>Today's Attendance</h2>

                <p>
                    <strong>Attendance Rate: 86%</strong>
                </p>

                <div class="attendance-bar">
                    <div class="attendance-progress"></div>
                </div>

                <p>
                    36 of 42 employees are present today.
                </p>

            </div>

        `;

    }


    else if (section === "employees") {

        content.innerHTML = `

            <div class="page-header">

                <h1>Employee Management</h1>

                <p>
                    Search and manage employee profiles.
                </p>

            </div>


            <div class="search-box">

                <input
                    type="text"
                    id="employeeSearch"
                    placeholder="🔎 Search employees..."
                    onkeyup="searchEmployees()">

            </div>


            <div class="employee-grid" id="employeeGrid">


                <div class="employee-card"
                     data-name="Rahul Sharma">

                    <div class="employee-card-top">

                        <div class="avatar">R</div>

                        <div>
                            <h3>Rahul Sharma</h3>
                            <p>Software Developer</p>
                        </div>

                    </div>

                    <div class="employee-info">

                        <div>
                            <span>ID</span>
                            <strong>EMP001</strong>
                        </div>

                        <div>
                            <span>Department</span>
                            <strong>Engineering</strong>
                        </div>

                        <div>
                            <span>Status</span>
                            <span class="badge present">
                                Present
                            </span>
                        </div>

                    </div>

                </div>


                <div class="employee-card"
                     data-name="Ananya Rao">

                    <div class="employee-card-top">

                        <div class="avatar">A</div>

                        <div>
                            <h3>Ananya Rao</h3>
                            <p>UI/UX Designer</p>
                        </div>

                    </div>

                    <div class="employee-info">

                        <div>
                            <span>ID</span>
                            <strong>EMP002</strong>
                        </div>

                        <div>
                            <span>Department</span>
                            <strong>Design</strong>
                        </div>

                        <div>
                            <span>Status</span>
                            <span class="badge present">
                                Present
                            </span>
                        </div>

                    </div>

                </div>


                <div class="employee-card"
                     data-name="Arjun Kumar">

                    <div class="employee-card-top">

                        <div class="avatar">A</div>

                        <div>
                            <h3>Arjun Kumar</h3>
                            <p>Backend Developer</p>
                        </div>

                    </div>

                    <div class="employee-info">

                        <div>
                            <span>ID</span>
                            <strong>EMP003</strong>
                        </div>

                        <div>
                            <span>Department</span>
                            <strong>Engineering</strong>
                        </div>

                        <div>
                            <span>Status</span>
                            <span class="badge absent">
                                Absent
                            </span>
                        </div>

                    </div>

                </div>


                <div class="employee-card"
                     data-name="Priya Singh">

                    <div class="employee-card-top">

                        <div class="avatar">P</div>

                        <div>
                            <h3>Priya Singh</h3>
                            <p>HR Executive</p>
                        </div>

                    </div>

                    <div class="employee-info">

                        <div>
                            <span>ID</span>
                            <strong>EMP004</strong>
                        </div>

                        <div>
                            <span>Department</span>
                            <strong>Human Resources</strong>
                        </div>

                        <div>
                            <span>Status</span>
                            <span class="badge leave">
                                Leave
                            </span>
                        </div>

                    </div>

                </div>


                <div class="employee-card"
                     data-name="Vikram Reddy">

                    <div class="employee-card-top">

                        <div class="avatar">V</div>

                        <div>
                            <h3>Vikram Reddy</h3>
                            <p>Frontend Developer</p>
                        </div>

                    </div>

                    <div class="employee-info">

                        <div>
                            <span>ID</span>
                            <strong>EMP005</strong>
                        </div>

                        <div>
                            <span>Department</span>
                            <strong>Engineering</strong>
                        </div>

                        <div>
                            <span>Status</span>
                            <span class="badge present">
                                Present
                            </span>
                        </div>

                    </div>

                </div>


                <div class="employee-card"
                     data-name="Sneha Patel">

                    <div class="employee-card-top">

                        <div class="avatar">S</div>

                        <div>
                            <h3>Sneha Patel</h3>
                            <p>Marketing Executive</p>
                        </div>

                    </div>

                    <div class="employee-info">

                        <div>
                            <span>ID</span>
                            <strong>EMP006</strong>
                        </div>

                        <div>
                            <span>Department</span>
                            <strong>Marketing</strong>
                        </div>

                        <div>
                            <span>Status</span>
                            <span class="badge present">
                                Present
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        `;

    }


    else if (section === "attendance") {

        content.innerHTML = `

            <div class="page-header">

                <h1>Attendance</h1>

                <p>
                    Monitor employee attendance and work hours.
                </p>

            </div>


            <div class="stats-grid">

                <div class="stat-card">
                    <p>Total Employees</p>
                    <h2>42</h2>
                </div>

                <div class="stat-card">
                    <p>Present</p>
                    <h2>36</h2>
                </div>

                <div class="stat-card">
                    <p>Absent</p>
                    <h2>4</h2>
                </div>

                <div class="stat-card">
                    <p>On Leave</p>
                    <h2>2</h2>
                </div>

            </div>


            <div class="content-card">

                <h2>Attendance Rate</h2>

                <p>
                    <strong>86%</strong> of employees are present.
                </p>

                <div class="attendance-bar">

                    <div class="attendance-progress"></div>

                </div>

            </div>


            <div class="content-card">

                <h2>Today's Records</h2>

                <div class="table-wrapper">

                    <table>

                        <thead>

                            <tr>
                                <th>Employee</th>
                                <th>ID</th>
                                <th>Check In</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td>Rahul Sharma</td>
                                <td>EMP001</td>
                                <td>09:02 AM</td>
                                <td>
                                    <span class="badge present">
                                        Present
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>Ananya Rao</td>
                                <td>EMP002</td>
                                <td>09:15 AM</td>
                                <td>
                                    <span class="badge present">
                                        Present
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>Arjun Kumar</td>
                                <td>EMP003</td>
                                <td>--</td>
                                <td>
                                    <span class="badge absent">
                                        Absent
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>Priya Singh</td>
                                <td>EMP004</td>
                                <td>--</td>
                                <td>
                                    <span class="badge leave">
                                        Leave
                                    </span>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        `;

    }


    else if (section === "leave") {

        content.innerHTML = `

            <div class="page-header">

                <h1>Leave Requests</h1>

                <p>
                    Review and approve employee leave requests.
                </p>

            </div>


            <div class="notification">

                🔔
                <strong>4 pending requests</strong>
                require your attention.

            </div>


            <div class="content-card">

                <div class="table-wrapper">

                    <table>

                        <thead>

                            <tr>
                                <th>Employee</th>
                                <th>Type</th>
                                <th>Dates</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>
                                    <strong>Rahul Sharma</strong>
                                </td>

                                <td>Paid Leave</td>

                                <td>24 Aug - 25 Aug</td>

                                <td>Personal work</td>

                                <td>
                                    <span
                                        id="rahulLeaveStatus"
                                        class="badge pending">
                                        Pending
                                    </span>
                                </td>

                                <td>
                                    <button
                                        class="action-btn"
                                        onclick="approveLeave('rahulLeaveStatus')">
                                        Approve
                                    </button>
                                </td>

                            </tr>


                            <tr>

                                <td>
                                    <strong>Ananya Rao</strong>
                                </td>

                                <td>Sick Leave</td>

                                <td>23 Aug</td>

                                <td>Not feeling well</td>

                                <td>
                                    <span
                                        id="ananyaLeaveStatus"
                                        class="badge pending">
                                        Pending
                                    </span>
                                </td>

                                <td>
                                    <button
                                        class="action-btn"
                                        onclick="approveLeave('ananyaLeaveStatus')">
                                        Approve
                                    </button>
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        `;

    }


    else if (section === "payroll") {

        content.innerHTML = `

            <div class="page-header">

                <h1>Payroll</h1>

                <p>
                    Manage employee salary information.
                </p>

            </div>


            <div class="content-card">

                <h2>Salary Table</h2>

                <div class="table-wrapper">

                    <table>

                        <thead>

                            <tr>
                                <th>Employee</th>
                                <th>Basic</th>
                                <th>Allowances</th>
                                <th>Deductions</th>
                                <th>Net Salary</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td>
                                    <strong>Rahul Sharma</strong>
                                </td>
                                <td>₹35,000</td>
                                <td>₹10,000</td>
                                <td>₹5,000</td>
                                <td class="salary-total">
                                    ₹40,000
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Ananya Rao</strong>
                                </td>
                                <td>₹38,000</td>
                                <td>₹8,000</td>
                                <td>₹5,000</td>
                                <td class="salary-total">
                                    ₹41,000
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Arjun Kumar</strong>
                                </td>
                                <td>₹40,000</td>
                                <td>₹7,000</td>
                                <td>₹5,000</td>
                                <td class="salary-total">
                                    ₹42,000
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Priya Singh</strong>
                                </td>
                                <td>₹32,000</td>
                                <td>₹8,000</td>
                                <td>₹4,000</td>
                                <td class="salary-total">
                                    ₹36,000
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>


            <div class="content-card">

                <h2>Payroll Summary</h2>

                <div class="stats-grid">

                    <div class="stat-card">
                        <p>Total Payroll</p>
                        <h3>₹1.59L</h3>
                    </div>

                    <div class="stat-card">
                        <p>Employees</p>
                        <h3>42</h3>
                    </div>

                    <div class="stat-card">
                        <p>Processed</p>
                        <h3>100%</h3>
                    </div>

                    <div class="stat-card">
                        <p>Payroll Month</p>
                        <h3>August</h3>
                    </div>

                </div>

            </div>

        `;

    }

}


/* ================= SEARCH ================= */

function searchEmployees() {

    const input =
        document.getElementById("employeeSearch");

    const cards =
        document.querySelectorAll(".employee-card");

    const value =
        input.value.toLowerCase();


    cards.forEach(function(card) {

        const name =
            card.dataset.name.toLowerCase();

        if (name.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ================= APPROVE LEAVE ================= */

function approveLeave(id) {

    const status =
        document.getElementById(id);

    if (!status) return;

    status.textContent = "Approved";

    status.className = "badge approved";

    alert("Leave request approved successfully!");

}


/* ================= DEFAULT LOAD ================= */

if (document.getElementById("employeeContent")) {

    showEmployeeSection("overview");

}


if (document.getElementById("adminContent")) {

    showAdminSection("overview");

}
function showSignup() {

    const signupBox = document.getElementById("signupBox");

    if (signupBox.style.display === "none") {
        signupBox.style.display = "block";
    } else {
        signupBox.style.display = "none";
    }
}


function signup() {

    const employeeId =
        document.getElementById("signupEmployeeId").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const role =
        document.getElementById("signupRole").value;

    const message =
        document.getElementById("signupMessage");


    if (!employeeId || !email || !password) {

        message.textContent =
            "Please fill all fields.";

        return;
    }


    if (password.length < 6) {

        message.textContent =
            "Password must contain at least 6 characters.";

        return;
    }


    const users =
        JSON.parse(localStorage.getItem("users")) || [];


    const existingUser =
        users.find(user => user.employeeId === employeeId);


    if (existingUser) {

        message.textContent =
            "Employee ID already exists.";

        return;
    }


    const newUser = {

        employeeId: employeeId,
        email: email,
        password: password,
        role: role

    };


    users.push(newUser);


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    message.textContent =
        "Account created successfully! You can now sign in.";


    document.getElementById("signupEmployeeId").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";

}