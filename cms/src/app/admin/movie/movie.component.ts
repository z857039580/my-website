import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  subscribeScoll: any;
  oldScrollTop=0;
  scrollState=false;

  constructor() {
  }

  ngOnInit() {
    this.subscribeScoll = fromEvent(window, 'scroll')
      .subscribe((event) => {
        this.onWindowScroll(event);
      });
  }

  scollPostion() {
    var t, l, w, h,clientH;
    if (document.documentElement && document.documentElement.scrollTop) {
      t = document.documentElement.scrollTop;
      l = document.documentElement.scrollLeft;
      w = document.documentElement.scrollWidth;
      h = document.documentElement.scrollHeight;
      clientH = document.documentElement.clientHeight;
    } else if (document.body) {
      t = document.body.scrollTop;
      l = document.body.scrollLeft;
      w = document.body.scrollWidth;
      h = document.body.scrollHeight;
      clientH = document.body.clientHeight;
    }
    return {
      top: t,
      left: l,
      width: w,
      height: h,
      clientH:clientH
    };
  }

  onWindowScroll(event) {
    let newTop = this.scollPostion().top;

    if(newTop<0) return;

    if(newTop+this.scollPostion().clientH >= this.scollPostion().height) return;

    if(newTop>this.oldScrollTop){
      this.scrollState = false
    }else {
      this.scrollState = true
    }

    this.oldScrollTop = newTop


  }
}
