import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: 'destination.component.html',
  styleUrls: ['destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   gridChange() {
    alert("das");
  //     $('.cat .active').removeClass('active');
  //     $(this).addClass('active');
  //     var selector = $(this).attr('data-filter');
  //     $container.isotope({
  //         filter: selector,
  //         animationOptions: {
  //             duration: 750,
  //             easing: 'linear',
  //             queue: false
  //         }
  //     });
  //     return false;
  };
  // $('.portfolio-item a').nivoLightbox({
  //     effect: 'slideDown',
  //     keyboardNav: true,
  // });


}
