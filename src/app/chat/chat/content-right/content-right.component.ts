import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-right',
  templateUrl: './content-right.component.html',
  styleUrls: ['./content-right.component.scss']
})
export class ContentRightComponent implements OnInit {
  listDetailFriend = [
    {
      avatar: 'this is image1',
      status: 'ステータス',
      type: 'カテゴリ',
      message: 'メッセージ'
    },
    {
      avatar: 'this is image2',
      status: 'ステータス',
      type: 'カテゴリ',
      message: 'メッセージ'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

