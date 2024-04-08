// Date Picker

function configure_libraries () {

    $('.datepicker').each(function(index, ele){
        $(ele).flatpickr({
            dateFormat: "d-m-Y", 
            defaultDate: new Date(),
            static: true,
            onChange: function(selectedDates, dateStr, instance){
                // console.log(dateStr);
            }
        });
    })

}

 // charts
 const defaultOptions = {

    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },

        height: 321,
        offsetY: 18
    },

    dataLabels: {
        enabled: false
    }

}

let barOptions  = {

    ...defaultOptions,

    chart :{
        ...defaultOptions.chart,
        type:"area"
    },
    tooltip :{
        enabled:true,
        y:{
            formatter:value => `${value}K`
        }
    },
    series: [
        {
            name:"Views",
            data:[15, 50, 20, 70, 20, 90, ]
        }
    ],
    fill : {
        type:"gradient",
        gradient :{
            type:"vertical",
            opacityFrom:1,
            opacityTo:0,
            stops:[0 , 100],
            colorStops :[
                {
                    offset:0,
                    opacity:0
                }
            ]
        }
    },
    grid :{
        show:false
    },

    yaxis: {
        labels :{
            show:true,
            style :{
                colors:"#fff"
            }
        },
    },

    xaxis :{
        labels :{
        show:true,
        floating:true,
        style :{
            colors:"#fff"
        }
        },
        axisBorder:{
            show:false
        },
        categories:["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"]
    },
}


let chart = new ApexCharts(
    document.querySelector(".area-chart"), barOptions
)

chart.render();