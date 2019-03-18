import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('barCanvas', { read: ElementRef }) barCanvas:ElementRef;
  @ViewChild('rangeElement', { read: ElementRef }) rangeElement:ElementRef;

  barChart: any;
  map: any;
  locationTitle: string;
  riskValue: string;
  riskCategory:string;
  day:string;
  selectedDayIndex:any;
  selectedMarker:any;
  maumeeValues: number[];
  detroitValues: number[];
  peleeValues: number[];
  catawbaValues: number[];
  dayRange:any;

  selectedIcon = {
    url: "../../assets/selectedIcon.png", // url
    scaledSize: new google.maps.Size(25, 25), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(12.5, 12.5) // anchor
  };
  
  icon = {
    url: "../../assets/icon.png", // url
    scaledSize: new google.maps.Size(20, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(10, 10) // anchor
  };


  ionViewDidEnter() {
    console.log("did enter");
    this.populateValues();
    this.loadMap();

    
  }


  loadMap() {
    console.log("test");



    let mapOptions = {
      center:  {lat:41.817514, lng:-82.982316},
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      scrollwheel: false,
      draggable:false,
      disableDoubleClickZoom: true
    }

    this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

      
      var detroitRiverBasin = new google.maps.Marker({
        map: this.map,
        position: {lat:42.079096, lng:-83.153090},
        icon: this.icon,
      });

      var _this = this;

      google.maps.event.addListener(detroitRiverBasin, 'click', function() { 
        if(_this.selectedMarker) {
            _this.selectedMarker.setIcon(_this.icon);
        }

        _this.selectedMarker = this;
        this.setIcon(_this.selectedIcon);
        _this.locationTitle = "Detroit River Basin";
        _this.day = "Tomorrow";
        _this.selectedDayIndex = 0;
        //set values from array
        var value = _this.detroitValues[0];
        _this.riskValue = _this.valueToString(value);
        _this.riskCategory = _this.valueToCategory(value);
        _this.dayRange = 1;
        //init graph

        _this.barChart = new Chart(_this.barCanvas.nativeElement, {
          type: 'bar',
            data: {
                labels: ["T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W"],
                datasets: [{
                    label: 'Severity Index',
                    data: _this.detroitValues,
                    backgroundColor: [
                        '#64639A',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
              legend:{
                display:false
              },
              tooltips:{
                enabled:false
              },
              onClick: function(e){
                
                var element = this.getElementAtEvent(e);
                // changes only the color of the active object
                
              _this.dayRange = element[0]._index+1;
          
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                        display:false
                    }
                  }],
                 
                }
            }
        });
      }); 

      var maumeeBay = new google.maps.Marker({
        map: this.map,
        position: {lat:41.715041, lng:-83.421938},
        icon: this.icon,
      });

      google.maps.event.addListener(maumeeBay, 'click', function() { 
        if(_this.selectedMarker) {
            _this.selectedMarker.setIcon(_this.icon);
        }

        _this.selectedMarker = this;
        this.setIcon(_this.selectedIcon);
        _this.locationTitle = "Maumee Bay";
        _this.day = "Tomorrow";
        _this.selectedDayIndex = 0;
        //set values from array
        var value = _this.maumeeValues[0];;
        _this.riskValue = _this.valueToString(value);
        _this.riskCategory = _this.valueToCategory(value);
        _this.dayRange = 1;
        //init graph

        _this.barChart = new Chart(_this.barCanvas.nativeElement, {
          type: 'bar',
            data: {
                labels: ["T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W"],
                datasets: [{
                    label: 'Severity Index',
                    data: _this.maumeeValues,
                    backgroundColor: [
                        '#64639A',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
              legend:{
                display:false
              },
              tooltips:{
                enabled:false
              },
              onClick: function(e){
                
                var element = this.getElementAtEvent(e);
                // changes only the color of the active object
                
              _this.dayRange = element[0]._index+1;
          
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                        display:false
                    }
                  }],
                 
                }
            }
        }); 
      }); 

      var pointPeleeNationalPark = new google.maps.Marker({
        map: this.map,
        position: {lat:41.928701, lng:-82.509498},
        icon: this.icon,
      });

      google.maps.event.addListener(pointPeleeNationalPark, 'click', function() { 
        if(_this.selectedMarker) {
            _this.selectedMarker.setIcon(_this.icon);
        }

        _this.selectedMarker = this;
        this.setIcon(_this.selectedIcon);
        _this.locationTitle = "Point Pelee National Park";
        _this.day = "Tomorrow";
        _this.selectedDayIndex = 0;
        //set values from array
        var value = _this.peleeValues[0];
        _this.riskValue = _this.valueToString(value);
        _this.riskCategory = _this.valueToCategory(value);
        _this.dayRange = 1;
        //init graph

        _this.barChart = new Chart(_this.barCanvas.nativeElement, {
          type: 'bar',
            data: {
                labels: ["T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W"],
                datasets: [{
                    label: 'Severity Index',
                    data: _this.peleeValues,
                    backgroundColor: [
                        '#64639A',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
              legend:{
                display:false
              },
              tooltips:{
                enabled:false
              },
              onClick: function(e){
                
                var element = this.getElementAtEvent(e);
                // changes only the color of the active object
                
              _this.dayRange = element[0]._index+1;
          
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                        display:false
                    }
                  }],
                 
                }
            }
        });
      });  

      var catawbaIsland = new google.maps.Marker({
        map: this.map,
        position: {lat:41.571459, lng:-82.839420},
        icon: this.icon,
      });
      
      google.maps.event.addListener(catawbaIsland, 'click', function() { 
        if(_this.selectedMarker) {
            _this.selectedMarker.setIcon(_this.icon);
        }

        _this.selectedMarker = this;
        this.setIcon(_this.selectedIcon);
        _this.locationTitle = "Catawba Island";
        _this.day = "Tomorrow";
        _this.selectedDayIndex = 0;
        //set values from array
        var value = _this.catawbaValues[0];
        _this.riskValue = _this.valueToString(value);
        _this.riskCategory = _this.valueToCategory(value);
        _this.dayRange = 1;
        //init graph

        _this.barChart = new Chart(_this.barCanvas.nativeElement, {
          type: 'bar',
            data: {
                labels: ["T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W"],
                datasets: [{
                    label: 'Severity Index',
                    data: _this.catawbaValues,
                    backgroundColor: [
                        '#64639A',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9',
                        '#8E8BE9'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
              legend:{
                display:false
              },
              tooltips:{
                enabled:false
              },
              onClick: function(e){
                
                var element = this.getElementAtEvent(e);
                // changes only the color of the active object
                
              _this.dayRange = element[0]._index+1;
          
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                        display:false
                    }
                  }],
                 
                }
            }
        });
      }); 



  }

  valueToCategory(num) {
    if(num > 4) {
      return "Significant Risk";
    }
    else if(num > 2) {
      return "Mild Risk";
    }
    else {
      return "Little Risk"
    }
  }

  valueToString(num) {
    return num.toFixed(1);
  }

  valueToDay(num) {
    var days = ["Tomorrow", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "March 27", "March 28", "March 29", "March 30", "March 31", "April 1", "April 2", "April 3" ]
    return days[num-1];
  }

  onChangeSlider(event) {

    this.day = this.valueToDay(event.detail.value);
    
    var value;
    if(this.locationTitle == "Detroit River Basin") {
      value = this.detroitValues[event.detail.value-1];
    }else if(this.locationTitle == "Maumee Bay") {
      value = this.maumeeValues[event.detail.value-1];
    } else if(this.locationTitle == "Point Pelee National Park") {
      value = this.peleeValues[event.detail.value-1];
    }
    else {
      value = this.catawbaValues[event.detail.value-1];
    }

    this.riskCategory = this.valueToCategory(value)
    this.riskValue = this.valueToString(value);

    this.barChart.data.datasets[0].backgroundColor = [
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9',
      '#8E8BE9'
  ];
  this.barChart.data.datasets[0].backgroundColor[event.detail.value-1] = '#64639A';
  this.barChart.update();
  }

  populateValues() {
    this.maumeeValues = [14] as number[];
    this.peleeValues = [14] as number[];
    this.detroitValues = [14] as number[];
    this.catawbaValues = [14] as number[];

    for(var i = 0; i < 14; i++) {
      if(i == 0) {
        var value = Math.round((Math.random() * 9) * 10) / 10;
        this.maumeeValues[i] = value;
        value = Math.round((Math.random() * 9) * 10) / 10;
        this.peleeValues[i] = value;
        value = Math.round((Math.random() * 9) * 10) / 10;
        this.detroitValues[i] = value;
        value = Math.round((Math.random() * 9) * 10) / 10;
        this.catawbaValues[i] = value;
      }
      else {
        var change = Math.round((Math.random() * 3) * 10) / 10;
        if((Math.floor(Math.random() * 2) == 0)) {
          change*=-1;
        }
        this.maumeeValues[i] = this.maumeeValues[i-1]+change;
        if(this.maumeeValues[i] > 9) {
          this.maumeeValues[i] = 9;
        }
        else if(this.maumeeValues[i] < 0) {
          this.maumeeValues[i] = 0;
        }

        change = Math.round((Math.random() * 3) * 10) / 10;
        if((Math.floor(Math.random() * 2) == 0)) {
          change*=-1;
        }
        this.peleeValues[i]=this.peleeValues[i-1]+change;
        if(this.peleeValues[i] > 9) {
          this.peleeValues[i] = 9;
        }
        else if(this.peleeValues[i] < 0) {
          this.peleeValues[i] = 0;
        }

        change = Math.round((Math.random() * 3) * 10) / 10;
        if((Math.floor(Math.random() * 2) == 0)) {
          change*=-1;
        }
        this.detroitValues[i]=this.detroitValues[i-1] + change;
        if(this.detroitValues[i] > 9) {
          this.detroitValues[i] = 9;
        }
        else if(this.detroitValues[i] < 0) {
          this.detroitValues[i] = 0;
        }

        change = Math.round((Math.random() * 3) * 10) / 10;
        if((Math.floor(Math.random() * 2) == 0)) {
          change*=-1;
        }
        this.catawbaValues[i]=this.catawbaValues[i-1] + change;
        if(this.catawbaValues[i] > 9) {
          this.catawbaValues[i] = 9;
        }
        else if(this.catawbaValues[i] < 0) {
          this.catawbaValues[i] = 0;
        }

      }

    }

    console.log(this.detroitValues);
  }

}
