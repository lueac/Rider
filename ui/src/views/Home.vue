/* eslint-disable indent */
<template>
  <div class="home">
    <v-header></v-header>
    <div class="banner">
      <img src="@/assets/img/banner.jpg" alt="banner" />
    </div>
    <!-- 选择模块 -->
    <div class="container">
      <div class="checkCard">
        <div class="item">
          <div class="title">雇佣镖师</div>
          <div class="text">镖局安排 安全稳定</div>
          <div class="tip">全</div>
        </div>
        <div class="item">
          <div class="title">侠客镖师</div>
          <div class="text">时间自由安排</div>
          <div class="tip">兼</div>
        </div>
      </div>
      <div class="selectBox">
        <div class="item">
          <div class="selectTitle">
            所属学校
            <span>选择骑手所在区域，指定单更精准哦</span>
          </div>
          <div class="selectBody">
            <div @click="check(1)" class="select">
              <span>{{ belong.val }}</span>
              <i class="iconfont iconicon_sanjiaoxing"></i>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="selectTitle">
            可押送学校
            <span>可选择添加多个学校</span>
          </div>
          <div class="selectBody">
            <div @click="check(2)" class="select">
              <span>请选择</span>
              <i class="iconfont iconicon_sanjiaoxing"></i>
            </div>
            <div class="valList">
              <template v-for="(item, index) in school.val">
                <span class="valItem" :key="index">
                  {{ item.name }}
                  <i @click="remove(index)" class="iconfont iconshanchu"></i>
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 所属学校列表 -->
    <van-actionsheet
      @select="select"
      :actions="list"
      v-model="show"
    ></van-actionsheet>
    <div class="dividing"></div>
    <!-- 表单模块 -->
    <van-cell-group class="form">
      <van-field
        :border="true"
        v-model="form.phone"
        placeholder="请输入手机号码"
      />
      <van-field
        type="password"
        v-model="form.password"
        placeholder="请输入密码"
      />
      <van-field
        type="password"
        v-model="form.confirm"
        placeholder="再次确认密码"
      />
      <div class="container">
        <div class="tip">
          <span>*</span> 请认真填写以上信息，以便尽早通过后台审核，
          将在三个工作日内通知您
        </div>
      </div>
    </van-cell-group>
    <div class="dividing"></div>
    <!-- 问题 -->
    <div class="question">
      <div class="container">
        <div class="boxTitle">
          <i class="iconfont iconwenti"></i>
          镖师常问
        </div>
        <div class="questionList">
          <div class="item">
            <div class="title">押镖时间安排</div>
            <div class="text">
              文字说明文字说明文字说明文字说明文字说明文字说明文字说明
              文字说明文字说明文字说明文字说明文字说明文字说明文字说明
              文字说明文字说明文字说明文字说明文字说明文字说明文字说明
              文字说明文字说明文字说明文字说明文字说明文字说明文字说明
              文字说明文字说明文字说明文字说明文字说明文字说明文字说明
              文字说明文字说明文字说明文字说明文字说明文字说明文字说明
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部提交模块 -->
    <div class="bottomBox">
      <van-checkbox v-model="checkBol" checked-color="#ffc925">
        <span class="protocol">我已同意并阅读《园点骑车入驻说明》</span>
      </van-checkbox>
    </div>
  </div>
</template>
<script>
import vHeader from "@/components/public/Header";
export default {
  name: "home",
  data() {
    return {
      belong: {
        val: "无",
        list: [
          {
            name: "黎明大学",
            val: "liming"
          },
          {
            name: "华侨大学",
            val: "huaqiao"
          }
        ]
      },
      show: false,
      type: 0,
      list: [],
      school: {
        val: [],
        list: [
          {
            name: "厦门大学",
            val: "xiamen"
          },
          {
            name: "福州大学",
            val: "fuzhou"
          }
        ]
      },
      form: {
        phone: "",
        password: "",
        confirm: ""
      },
      checkBol: false
    };
  },
  methods: {
    check(type) {
      this.type = type;
      if (this.type === 1) {
        this.list = this.belong.list;
        this.show = true;
      }
      if (this.type === 2) {
        this.list = this.school.list;
        this.show = true;
      }
    },
    select(item) {
      switch (this.type) {
        case 1:
          this.belong.val = item.name;
          break;
        case 2:
          this.school.val.push(item);
          break;
      }
      this.show = false;
    },
    remove(index) {
      this.school.val.splice(index, 1);
    }
  },
  components: {
    vHeader
  }
};
</script>
<style lang="less" scoped>
.home {
  .dividing {
    width: 100vw;
    height: 16px;
    background-color: #edecf2;
  }
  .banner {
    img {
      width: 100%;
      vertical-align: bottom;
    }
  }
  .container {
    padding: 0 30px;
  }
  .checkCard {
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    .item {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: 46%;
      height: 183px;
      border-radius: 16px;
      padding: 36px 40px;
      text-align: left;
      .title {
        width: 100%;
        font-size: 36px;
        align-self: flex-start;
      }
      .text {
        width: 100%;
        font-size: 28px;
        align-self: flex-end;
      }
      .tip {
        position: absolute;
        height: 90px;
        width: 90px;
        right: 0;
        top: 0;
        background-color: #fff;
        border-radius: 0 16px 0 80px;
        font-size: 38px;
        line-height: 38px;
        padding: 20px 0 0 34px;
      }
      &:nth-child(1) {
        background-color: #ffd702;
        .title,
        .text {
          color: #333333;
        }
        .tip {
          background-color: #ffc925;
          color: #ffd966;
        }
      }
      &:nth-child(2) {
        background-color: #333333;
        .title,
        .text {
          color: #5d5d5d;
        }
        .tip {
          background-color: #4c4c4c;
          color: #5f5f5f;
        }
      }
    }
  }
  .selectBox {
    text-align: left;
    .item {
      margin-bottom: 55px;
      .selectTitle {
        font-size: 32px;
        color: #333333;
        margin-bottom: 36px;
        span {
          font-size: 24px;
          color: #9fa2ac;
        }
      }
      .selectBody {
        .select {
          width: 426px;
          height: 68px;
          background-color: #f1f4fd;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          span,
          i {
            font-size: 28px;
            color: #333333;
          }
        }
        .valList {
          .valItem {
            height: 54px;
            display: inline-block;
            font-size: 28px;
            line-height: 54px;
            color: #9fa2ac;
            border: 1px solid #9fa2ac;
            padding: 0 18px;
            margin: 36px 32px 0 0;
            // border-radius: 0.1px;
            i {
              font-size: 28px;
              line-height: 54px;
              color: #9fa2ac;
              margin-left: 12px;
            }
          }
        }
      }
    }
  }
  .form {
    .tip {
      text-align: left;
      font-size: 20px;
      color: #ff2400;
      display: flex;
      justify-content: space-between;
      margin: 25px 0 48px;
    }
  }
  .question {
    .boxTitle {
      padding: 30px 0;
      width: 100%;
      color: #333333;
      text-align: left;
      border-bottom: 1px solid #e3e3e3;
      i {
        margin-right: 13px;
        color: #ffd700;
      }
    }
    .questionList {
      .item {
        padding: 48px 0;
        text-align: left;
        border-bottom: 1px solid #e3e3e3;
        .title {
          font-size: 32px;
          color: #333333;
          margin-bottom: 24px;
        }
        .text {
          font-size: 24px;
          color: #9fa2ac;
        }
      }
    }
  }
  .bottomBox {
    text-align: left;
    .protocol {
      font-size: 24px;
      color: #333333;
    }
  }
}
</style>
