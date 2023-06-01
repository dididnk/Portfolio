const chartData = {
    labels: ["Fullstack", "Back end", "Front end", "Mobile", "Gestion de projet"],
    data: [40, 10, 10, 20, 20],
  };
  
  const myChart = document.querySelector(".my-chart");
  const ul = document.querySelector(".details ul");
  
  new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 10,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl = () => {
    chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class='percentage'> ${chartData.data[i]}%</span>`;
      ul.appendChild(li);
    });
  };
  
  populateUl();