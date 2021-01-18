import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {
  listFriend = ['未開封', '開封済み', 'お気に入り', 'ヘルプサポート'];
  constructor() { }

  ngOnInit(): void {
  }

}
