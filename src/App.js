import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // 設定
    const listTitle = "メンバー一覧";
    const header = new Array("名前", "担当楽器", "希望パート");

    // 仮置き
    let list1 = new Array("なまえ", "がっき", "ぎたー");
    let list2 = new Array("namae", "gakki", "drum");
    // 参考用ボタン
    // <h1>{header.map(item => (<button>{item}</button>))}</h1>

    // 参考用リストの表示
    // {header.map(headerName => (<th>{headerName}</th>))}
    // {list1.map(menber => (<td>{menber}</td>))}
    return (

        <div class="bs-member-list">
          <div class="bs-member-list__title">
            {listTitle}
          </div>

          <table>
            <thead class="scrollHead">
              {header.map(headerName => (<th class="tableHeader">{headerName}</th>))}
            </thead>
            <tbody class="scrollBody">
              <tr class="test">{list1.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
              <tr class="test">{list2.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
              <tr class="test">{list1.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
              <tr class="test">{list2.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
              <tr class="test">{list1.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
              <tr class="test">{list2.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
              <tr class="test">{list1.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
              <tr class="test">{list2.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
              <tr class="test">{list1.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
              <tr class="test">{list2.map(menber => (<td class="tableBody">{menber}</td>))}</tr>
            </tbody>
          </table>

        </div>

    )
  }
}

export default App;
