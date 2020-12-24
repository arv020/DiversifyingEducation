function plotpie () {
   
    Highcharts.chart('piechart', {
        chart: {
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0.0)',
        },


        title: {
            text: 'Percentage Distribution of Race/Ethnicity in Faculty at Post Secondary Institutes, Fall 2018'
        },

        subtitle: {
            text: 'Source: ncses.ed.gov'
        },


        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
       

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
      
            x: 0,
            y: 20,
            floating: true,
            borderWidth: 0, 
        },
        plotOptions: {
            pie: {
                borderWidth: 3,
                shadow: false,
                center: ['50%', '50%'],
                
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        

        series: [{ name: "Percentage",
        colorByPoint: true,
            data: [{
                
                name: 'Hispanic',
                y: 6, 
                color: "#F88017"
                
            }, {
                name: 'Asian/Pacific Islander',
                y: 12,
                color: "#52D017"
                
            }, {
                name: 'Black',
                y: 6,
                color: "Red"
               
            }, {
                name: 'White',
                y: 75,
                color: "#98AFC7"
                
            } , {
                name: 'Other',
                y: 1,
                color: "Purple"
                
            }], innerSize: '60%'
        }],
        caption: {
            text: 'This chart represents the lack of diversity in faculty at universities. As you can see, a majority of the faculty identify as white. There is a visible lack of people of color teaching at universities.'}
})};


function plotline() {
    Highcharts.chart('linechart', {
        chart: {
            type: 'line',
            panning: true
          
        },
   
        
        title: {
            text: 'Doctorate Degrees earned by Race from 2006-2016'
            
        },
    
        subtitle: {
            text: 'Source: ncses.nsf.gov'
        },
       
        yAxis: {
            max: 32000,
            tickInterval: 5000,

            title: {
                text: 'Number of Doctorate Degrees'
            }
        },
    
        xAxis: {
        
            accessibility: {
                rangeDescription: 'Range: 2006 to 2016'
                
            }
        },
        labelOptions: {
            shape: 'connector',
            align: 'right',
            justify: false,
            crop: true,
            style: {
                fontSize: '0.8em',
                textOutline: '1px white'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        tooltip: {
            pointFormat: 'In {point.x}, <b>{point.y}</b> doctorate degrees had been awarded to people of race: {series.name}'
        },
    
        plotOptions: {
            
            area: {
              
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            },
            series: {
               
                label: {
                    connectorAllowed: false
                },
                
                pointStart: 2006
            }
        },
    
        series: [{
            name: 'Hispanic',
            color: "#F88017",
            data: [1980, 2138, 2410, 2419, 2294, 2457, 2707, 2938, 3239, 3554, 3891],
            
        }, {
            name: 'Asian/Pacific Islander',
            color: "#52D017",
            data: [3210, 3483, 3445, 3485, 3407, 3357, 3574, 3722, 3681, 3928, 3813]
        }, {
            name: 'Black',
            color: "Red",
            data: [2884,3452, 3478, 3645, 3372, 3759, 4065, 4331, 4780, 5050, 5265]
        }, {
            name: 'White',
            color: "#98AFC7",
            data:  [29114, 31355, 31342, 31526, 28670, 29455, 30424, 31614, 32622, 33218, 33202]
        }],
        
        caption: {
            text: 'This line chart shows the regression of diversity throughout 10 years. As you can see, there is still a lot to do in order to increase the people of color attending universities.'},
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
}

anychart.onDocumentReady(function() {
    var data = [
      {"x": "Diversity", "value": 15},
      {"x": "Ambitious", "value": 9},
      {"x": "Dedicated", "value": 9},
      {"x": "Strong", "value": 9},
      {"x": "Sacrifices", "value": 9},
      {"x": "First", "value": 8},
      {"x": "Adaptable", "value": 8},
      {"x": "Education", "value": 8},
      {"x": "Ideas", "value": 8},
      {"x": "Equality", "value": 7},
      {"x": "University", "value": 7},
      {"x": "College", "value": 7},
      {"x": "Resources", "value": 7},
      {"x": "Power", "value": 7},
      {"x": "Strength", "value": 6},
      {"x": "Motivated", "value": 6},
      {"x": "Learning", "value": 6},
      {"x": "Determination", "value": 6},
      {"x": "Resources", "value": 6},
      {"x": "Success", "value": 6},
      {"x": "Proud", "value": 6}
    ];
  // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);
  // set a chart title
    //chart.title('15 most spoken languages')
    // set an array of angles at which the words will be laid out
    chart.angles([0, 90])
    chart.textSpacing(0);
    chart.mode("spiral");
    chart.normal().fontWeight(600);
    //chart.normal().fontWeight("italic");
    
    var customColorScale = anychart.scales.linearColor();
    customColorScale.colors(["#1F45FC", "#FBB917"]);

    // set the color scale as the color scale of the chart
    chart.colorScale(customColorScale);

    chart.container("wordcloud");
    chart.draw();
  });

var slideIndex = 1;
  
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
}
  
function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("tabchange");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
  }


function bachbar() {
    Highcharts.chart('bachbar', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Bachelor Degrees: Race Distribution, 2016'
        },
        subtitle: {
            text: 'Source: ncses.nsf.gov'
        },
        
        xAxis: {
            categories: ['White', 'Black', 'Hispanic', 'Asian/Pacific Islander'],
            title: {
                text: 'Race/Ethnicity'
            }
        },
        yAxis: {
            
            min: 0,
            title: {
                text: 'Number of Degrees',
                
            }
            
        },
        
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        
        credits: {
            enabled: false
        },


       
        series: [{
            name: "2016",
            data: [1145220, 185880, 245081, 137364]
        }]
    });
}

function docbar() {
    Highcharts.chart('docbar', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Doctorate Degrees: Race Distribution, 2016'
        },
        subtitle: {
            text: 'Source: ncses.nsf.gov'
        },

        xAxis: {
            categories: ['White', 'Black', 'Hispanic', 'Asian/Pacific Islander'],
            title: {
                text: 'Race/Ethnicity'
            }
        },
        yAxis: {
            
            min: 0,
            title: {
                text: 'Number of Degrees',
                
            }
            
        },
        
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        
        credits: {
            enabled: false
        },
        series: [{
            name: "2016",
            data: [33202, 5265, 3891, 3813]
        }]
    });
}


function mentorappear() {
    var checkBox = document.getElementById("C1");
    var text = document.getElementById("text1");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function scholarappear() {
    var checkBox = document.getElementById("C2");
    var text = document.getElementById("text2");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}
function fellowappear() {
    var checkBox = document.getElementById("C3");
    var text = document.getElementById("text3");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}




function init() { 
    plotpie();
    plotline();
    showSlides();
    docbar();
    bachbar();
    mentorappear();
    scholarappear();
    fellowappear();
    showSlides(slideIndex);

}


document.addEventListener('DOMContentLoaded', init, false);
