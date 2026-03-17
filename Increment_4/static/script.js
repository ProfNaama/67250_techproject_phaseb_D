var now = new Date();
var year = now.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[now.getMonth()];

document.getElementById("footer_copy").innerHTML= "&copy; " + year + " MONOMUSE. All rights reserved.";

function active_nav() {
    let NavLinks = document.querySelectorAll('nav li a');
    NavLinks.forEach(element => {
        if (window.location.href == element.href) {
            element.classList.add("active");
        }
    });
}
active_nav();



function selectDate(day) {
    var buy_form = document.getElementById("ticket-form");
    buy_form.style.display = "block";
        // update the date in the form
        var dateInput = document.getElementById("visitDate");

        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
    
        month = String(month).padStart(2, '0');
        day = String(day).padStart(2, '0');
    
        dateInput.value = year + "-" + month + "-" + day;
}

function checkout() {
    alert("Redirecting to ticket purchase...");
    location.reload();
}

function updateScheduleToCurrentMonth() {
    const table = document.getElementById("scheduleTable");
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const currentDay = today.getDate();

    let html = `
        <tr>
            <th colspan="7">${monthNames[month]} ${year}</th>
        </tr>
        <tr>
            <th colspan="7">Select a date</th>
        </tr>
        <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
        </tr>
    `;

    let day = 1;

    for (let week = 0; week < 6; week++) {
        html += "<tr>";

        for (let i = 0; i < 7; i++) {
            if ((week === 0 && i < firstDay) || day > daysInMonth) {
                html += "<td></td>";
            } else {
                if (day < currentDay) {
                    html += `<td><span class="date passed">${day}</span></td>`;
                } else {
                    html += `<td><span class="date" onclick="selectDate(${day})">${day}</span></td>`;
                }
                day++;
            }
        }

        html += "</tr>";

        if (day > daysInMonth) {
            break;
        }
    }

    table.innerHTML = html;
}

// updateScheduleToCurrentMonth();


$(document).ready(function () {
    $(".read-more-btn").click(function (e) {
      e.preventDefault();
  
      var moreText = $(".more-text");
  
      moreText.slideToggle();
  
      $(this).text(
        moreText.is(":visible") ? "Read Less" : "Read More"
      );
    });
  });