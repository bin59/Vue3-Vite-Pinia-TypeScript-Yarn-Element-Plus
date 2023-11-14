<template>
  <div v-if="ifLogin" class="wrapper">
    <div id="head"></div>
    <main>
      <div class="left">
        <div class="img">
          <img
            src="@/assets/picture/login_register/login_back.jpg"
            alt="login"
          />
        </div>
      </div>
      <div class="right">
        <span id="newTime"></span>
        <div class="login">
          <form action="" id="loginForm">
            <p>登录</p>
            <p>用户名</p>
            <input type="username" id="username" placeholder="请输入用户名" />
            <p>密码</p>
            <input type="password" id="password" placeholder="请输入密码" />
            <p>验证码</p>

            <div class="code">
              <input
                type="text"
                id="icode"
                v-model="iCode"
                placeholder="输入验证码"
              /><span @click="codeFn" title="看不清，换一张"
                >看不清，换一张</span
              >
            </div>
            <span class="submit">
              <botton @click="submitCheck">登录</botton>
              <span
                >没有账号？<span class="register" @click="toRegister"
                  >注册</span
                ></span
              >
            </span>
          </form>
        </div>
      </div>
    </main>
  </div>

  <div v-else class="wrapper">
    <div id="head"></div>
    <main>
      <div class="left">
        <div class="img">
          <img src="/src/assets/picture/login_register/login_back.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <span id="newTime"></span>
        <div class="register">
          <form id="regist">
            <p>注册</p>
            <p>用户名</p>
            <input
              type="username"
              v-model="uName"
              id="username"
              @change="unamecheck"
              placeholder="请输入用户名"
            />
            <p>密码</p>
            <input
              type="password"
              v-model="pwd"
              id="password"
              @change="pwdcheck"
              placeholder="请输入密码"
            />
            <p>确认密码</p>
            <input
              type="password"
              v-model="cpwd"
              id="confirmpwd1"
              @change="confirmpwd"
              placeholder="请再次输入密码"
            />
            <p>邮箱</p>
            <input
              type="text"
              id="email"
              v-model="email"
              placeholder="请输入邮箱"
            />
            <span class="submit">
              <botton id="registSubmit" @click="registSubmit()">注册</botton>
              <span>已有账号？<a href="./login.html">登录</a></span>
            </span>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
let ifLogin = true

let codearr: string, //存储验证码
  arr = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
  iCode: string, //输入框输入的验证码
  pwd: string, //输入框输入的，密码
  uName: string,
  cpwd: string,
  email: string

function submitCheck() {
  checkcode()
}

function codeFn() {
  changecode()
}

function changecode() {
  codearr = '' //要重置验证码
  for (let i = 0; i < 4; i++) {
    let a = Math.random() * arr.length //parseInt()
    codearr += arr[a]
  }
  iCode = codearr
}

function checkcode() {
  if (iCode.toLowerCase() == codearr.toLowerCase()) {
    return true
  } else {
    alert('请输入正确的验证码!')
    return false
  }
}

function registSubmit() {
  pwdcheck()
  confirmpwd()
  unamecheck()
  // emailcheck();
  let a = pwdcheck() && confirmpwd() && unamecheck()
  // &&emailcheck();
  if (a) {
    alert('注册成功，请登录！')
    // location.href = './login.html'
  }
}
function toRegister() {
  console.log(ifLogin)

  ifLogin = false
  console.log(ifLogin)
}

function unamecheck() {
  let uname = uName
  let pattern = /^[a-zA-Z]\w{4,8}$/
  if (pattern.test(uname)) {
    console.log('用户名合法:' + uname)
    return true
  } else {
    alert('请输入5-9位的用户名,不能以数字开头')
  }
}
function pwdcheck() {
  let pattern = /^[a-zA-Z0-9_-]{6,12}/
  if (pattern.test(pwd)) {
    console.log('密码合法:' + pwd)
    return true
  } else {
    alert('请输入6-12位的密码')
  }
}
function confirmpwd() {
  if (pwd == cpwd) {
    console.log(cpwd, pwd)
    return true
  } else if (pwd != cpwd) {
    alert('密码不一致')
    console.log(cpwd, pwd)
  }
}

function emailcheck() {
  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  if (reg.test(email)) {
    console.log('邮箱格式正确:' + email)
    return true
  } else {
    alert('邮箱格式不正确')
  }
}
</script>
<style lang="scss" scoped>
.wrapper2,
.wrapper {
  main {
    width: 900px;
    margin: 0 auto;
    border-radius: 28px;
    overflow: hidden;
    display: flex;

    .left {
      position: relative;
      overflow: hidden;

      .img {
        width: 491px;
        height: 525px;
        border-radius: 10%;
      }

      &::before {
        content: '';
        display: block;
        width: 100px;
        height: 650px;
        background-color: rgb(243, 241, 241);
        transform: rotate(-8deg);
        position: absolute;
        bottom: 0;
        right: -47px;
      }
    } //left

    .right {
      flex: 1;
      background-color: rgb(243, 241, 241);
      padding: 100px 97px 0 38px;
      position: relative;

      #newTime {
        color: #88aab3;
        position: absolute;
        top: 50px;
        left: 0px;
      }

      .code {
        padding-top: 10px;
        #icode {
          width: 100px;
        }
        #code {
          color: rgb(243, 241, 241);
          background-color: #9dc3ce;

          font-size: 20px;
          text-align: center;
          padding: 5px 5px;
          margin-left: 5%;

          cursor: pointer;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        p:first-child {
          font-size: 30px;
          font-weight: bold;
          text-align: center;
          padding-bottom: 8px;
        }
        p {
          padding-top: 21px;

          font-size: 16px;
          a {
            color: #88aab3;
          }
        }
        input:not(:last-child) {
          margin-top: 10px;
          background-color: rgb(243, 241, 241);

          -webkit-appearance: none;
          -moz-appearance: none;

          line-height: 22px;
          border: none;

          border-bottom: 2px solid #9dc3ce;

          outline: none;
          caret-color: #88aab3;

          &:hover {
            border-color: #71aebe;
          }
        }
        label {
          font-size: 12px;
          padding-top: 21px;
          a {
            padding-left: 15px;

            color: #88aab3;
          }
        }
        span.submit {
          display: flex;
          align-items: center;
          padding-top: 35px;

          botton {
            width: 110px;
            line-height: 35px;
            text-align: center;
            background-color: #88aab3;
            color: white;
            border-radius: 14px;
            cursor: pointer;
          }

          span {
            padding-left: 15px;
            font-size: 12px;

            .register {
              cursor: pointer;
              color: #88aab3;
            }
          }
        } //.submin
      } //form
    }
  }
}
</style>
