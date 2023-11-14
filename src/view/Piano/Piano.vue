<template>
  <div class="wrapper">
    <div class="piano">
      <div class="set">
        <p>操作键：<span class="keys">1,2,3,4,5,6,7,8,9,0,i,o,p</span></p>
        <!-- <p>操作键：<span class="keys"> a,s,d,f,h,j,k,l,e,r,y,u,i</span></p> -->
        <p><button class="reSetKeys">操作键重置</button></p>
        <p>
          <button class="setKeys">自定义操作键</button>
          <input
            type="text"
            placeholder="请输入13个不相同的按键"
            class="input active"
          />
        </p>
      </div>
      <div class="song">
        <p>演奏歌曲</p>
        <input type="text" class="songInp" />
        <button class="songBtn">演奏</button>
      </div>

      <ul>
        <li>
          <div></div>
          <p></p>
        </li>
        <li>
          <div></div>
          <p></p>
        </li>
        <li><div></div></li>
        <li>
          <div></div>
          <p></p>
        </li>
        <li>
          <div></div>
          <p></p>
        </li>
        <li>
          <div></div>
          <p></p>
        </li>
        <li><div></div></li>
        <li><div></div></li>
      </ul>
      <div class="show">
        <p class="showNum"></p>
        <p class="showWord"></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { onMounted } from 'vue'

// onMounted(() => {
//   let ul = document.querySelector('.piano ul'),
//     whites = ul.querySelectorAll('li>div'),
//     blacks = ul.querySelectorAll('li>p'),
//     audios = document.getElementsByTagName('audio'),
//     addaudio,
//     keyCodes = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 86], //1~9-0  - = v
//     keyLength = keyCodes.length

//   let songFlag = false, //演奏开关
//     songInp = document.querySelector('.songInp'), //歌曲输入框
//     songBtn = document.querySelector('.piano .songBtn') //演奏按钮

//   // *添加、绑定音频
//   whites.forEach((val, idx) => {
//     // 添加音频
//     addaudio = document.createElement('audio')
//     addaudio.setAttribute('src', 'audios/' + 'w' + (idx + 1) + '.ogv')
//     document.body.appendChild(addaudio)
//     // 白键添加数字
//     val.innerText = idx + 1
//     // 绑定音频
//     whites[idx].addEventListener('mousedown', () => {
//       audios[idx].load()
//       audios[idx].play()
//       songFlag && show()
//     })
//   })

//   blacks.forEach((val, idx) => {
//     addaudio = document.createElement('audio')
//     addaudio.setAttribute('src', 'audios/' + 'b' + (idx + 1) + '.ogv')
//     document.body.appendChild(addaudio)
//     // val.innerText = idx+8
//     blacks[idx].onmousedown = () => {
//       audios[idx + 8].load()
//       audios[idx + 8].play()
//     }
//   })

//   // *键盘操作钢琴
//   document.onkeydown = e => {
//     keyCodes.forEach((val, idx) => {
//       if (e.keyCode == keyCodes[idx]) {
//         if (idx < 8) {
//           whites[idx].classList.add('white_active')
//         } else {
//           blacks[idx - 8].classList.add('black_active')
//         }
//         audios[idx].load()
//         audios[idx].play()

//         songFlag && show()
//       }
//     })
//   }
//   // *键盘松开清除样式
//   document.onkeyup = e => {
//     keyCodes.forEach((val, idx) => {
//       if (e.keyCode == keyCodes[idx]) {
//         idx < 8
//           ? whites[idx].classList.remove('white_active')
//           : blacks[idx - 8].classList.remove('black_active')
//       }
//     })
//   }

//   // *设置操作键
//   let keys = document.querySelector('.keys'),
//     reSetKeys = document.querySelector('.reSetKeys'),
//     setKeys = document.querySelector('.setKeys'),
//     input = document.querySelector('.piano .input')

//   // *操作键重置
//   reSetKeys.onmousedown = () => {
//     keyCodes = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 86]
//     keys.innerHTML = '1,2,3,4,5,6,7,8,9,0,-,=,v'
//     alert('已重置')
//   }

//   // *自定义操作键
//   setKeys.onmousedown = () => {
//     let arr = [],
//       str = ''
//     setKeys.classList.add('active')
//     input.classList.remove('active')

//     input.onkeydown = e => {
//       let patt = /^[0-9a-zA-Z]*$/
//       if (e.key == 'Enter') {
//         console.log(arr)
//         setKeys.classList.remove('active')
//         input.classList.add('active')
//         keys.innerHTML = str
//         keyCodes = arr
//       } else if (patt.test(e.key)) {
//         console.log(e.keyCode, e.key)
//         arr.push(e.keyCode)
//         str += e.key + ' '
//       }
//     }
//   }

//   let dataJSON = {
//     晴天: {
//       num: {
//         num1: '32431571751',
//         num2: '1666555432343',
//         num3: '34534572711',
//         num4: '1155654234561677',
//         num5: '32431571751',
//         num6: '1666555432343',
//         num7: '34534572711',
//         num8: '115565467123211',
//       },
//       word: {
//         word1: '刮风这天我试过握着你手',
//         word2: '但偏偏雨渐渐大到我看你不见',
//         word3: '还要多久我才能在你身边',
//         word4: '等到放晴的那天也许我会比较好一点',
//         word5: '从前从前有个人爱你很久',
//         word6: '但偏偏风渐渐把距离吹得好远',
//         word7: '好不容易又能再多爱一天',
//         word8: '但故事的最后你好像还是说了拜拜 ',
//       },
//     },
//   }
//   let showWord = document.querySelector('.showWord'),
//     showNum = document.querySelector('.showNum'),
//     numLength, //num对象的长度
//     currentNum, //当前按下琴键数字
//     currentI = 1, //计数按了几下
//     currentKey = 1,
//     numXLength, //每句歌词的长度
//     songNum, //简谱数字
//     songWord //歌词

//   // fetch("./js/pu.json").then(response=>response.json())
//   // .then(data=>{
//   //     songBtn.addEventListener("click",()=>{
//   //       getSong(data)
//   //     })
//   // }).catch(err=>console.log(err))

//   // 点击演奏按钮
//   songBtn.addEventListener('click', () => {
//     // 获取歌词、简谱
//     getSong(dataJSON)
//   })
//   songInp.addEventListener('keydown', e => {
//     e.key == 'Enter' && getSong(dataJSON)
//   })

//   // 获取歌词数据函数
//   function getSong(dataJSON) {
//     let parseJSON = JSON.parse(JSON.stringify(dataJSON)),
//       data = parseJSON
//     let songInp = document.querySelector('.songInp').value //输入框输入的歌曲名
//     if (Boolean(data[songInp])) {
//       // console.log(songInp)
//       console.log(`num${currentKey}:第${currentKey}句歌词`)

//       songFlag = true
//       // 通过歌曲名获得歌词和简谱
//       songNum = data[songInp]['num']
//       songWord = data[songInp]['word']
//       //num对象的长度
//       numLength = Object.keys(songNum).length
//       //num1、2、3、x的长度
//       numXLength = songNum[`num${currentKey}`].length
//       // 初始化显示歌词简谱
//       showNum.innerHTML = songNum[`num${currentKey}`]
//       showWord.innerHTML = songWord[`word${currentKey}`]
//     } else {
//       return alert('您输入的歌曲名尚未加入曲库')
//     }
//   }

//   // 显示歌词、简谱
//   function show() {
//     console.log(`num${currentKey}:${currentI}`)
//     //是否小于num对象的长度
//     if (currentKey <= numLength) {
//       //按的次数是否小于等于num1、2、3...x字符串的长度
//       if (currentI <= numXLength) {
//         // 演奏完一句歌词时
//         if (currentI == numXLength) {
//           // 显示下一句歌词
//           ;[showNum.innerHTML, showWord.innerHTML, currentI] = [
//             songNum[`num${++currentKey}`],
//             songWord[`word${currentKey}`],
//             '0',
//           ]
//           // showNum.innerHTML = songNum[`num${++currentKey}`]
//           // showWord.innerHTML = songWord[`word${currentKey}`]
//           // currentI = 0
//           console.log(`num${currentKey}:第${currentKey}句歌词`)
//         }
//         currentI++
//       }
//       if (currentKey > numLength) {
//         ;[songFlag, currentKey, showNum.innerHTML, showWord.innerHTML] = [
//           false,
//           '1',
//           '',
//           '',
//         ]
//         console.log('演奏结束')
//       } else {
//         numXLength = songNum[`num${currentKey}`].length //num1、2、3、x的长度
//       }
//     }
//   }
// })
</script>
<style lang="scss" scope>
.piano {
  width: 90%;
  margin: 0 auto;
  .active {
    display: none;
  }
  ul {
    user-select: none;
    width: 480px;
    height: 360px;
    cursor: pointer;
    position: absolute;
    top: 20%;
    left: 30%;

    li {
      cursor: url(https://cdn.jsdelivr.net/gh/Zevs6/CDN/img/cursor/normal.cur),
        auto;
      float: left;
      list-style-type: none;
      text-align: center;
      position: relative;

      div {
        height: 360px;
        width: 60px;
        background: rgb(255, 255, 255);
        border: 1px solid;
        border-color: rgb(0, 0, 0);
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        box-shadow: inset 5px -8px 0 #00000023;
        display: table-cell;
        vertical-align: bottom;

        /* 当白键按下时的样式 */
        &:active {
          box-shadow: inset 3px -2px 0 #00000036;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.5)
          );
        }
      }

      &:not(:last-child) > div {
        border-right: none;
      }

      p {
        height: 200px;
        width: 40px;
        /* color: white; */
        background-color: #000;
        border-bottom-left-radius: 5.5px;
        border-bottom-right-radius: 5.5px;
        box-shadow: inset 5px -7px 0 #2c2c2c;
        display: table-cell;
        vertical-align: bottom;
        position: absolute;
        top: 0;
        left: 40px;
        z-index: 999;

        /* 当黑键按下时的样式 */
        &:active {
          box-shadow: inset 3px -5px 0 #2c2c2c;
        }
      }
    }
  }

  .white_active {
    box-shadow: inset 3px -2px 0 #00000036;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.5)
    );
  }

  .black_active {
    box-shadow: inset 3px -5px 0 #2c2c2c;
  }

  .show {
    color: khaki;
    font-size: 20px;
    position: absolute;
    top: 90%;
    left: 30%;
  }
  .showActive {
    background-color: rgba(241, 115, 92, 0.774);
  }
}
</style>
