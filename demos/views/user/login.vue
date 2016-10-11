<template>
  <div class="login">
    <mt-header title="登录">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="main-cont form-input">
      <form>
        <div class="form-group">
          <i class="iconfont so-email"></i>
          <span class="iconfont so-shuxian"></span>
          <input class="" type="text" placeholder="请输入邮箱" />
        </div>
        <div class="form-group">
          <i class="iconfont so-shouquan"></i>
          <span class="iconfont so-shuxian"></span>
          <input class="" type="text" placeholder="请输入授权账号"/>
        </div>
        <div class="form-group">
          <i class="iconfont so-suo"></i>
          <span class="iconfont so-shuxian"></span>
          <input class="" type="password" placeholder="请输入密码"/>
        </div>
        <div class="form-group">
          <mt-button type="primary" size="large">登录</mt-button>
        </div>
        <div class="form-group link-action">
          <a class="r-reg">商家入驻</a>
          <a>忘记密码</a>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss">
    @import '../../sass/base/variable.scss';
    .login {
        .form-input {
            margin: 0 18px;
            .form-group {
                margin-top: 20px;
                position: relative;
            }
            input {
                border: 1px solid #dbdbdb;
                height: 42px;
                width: 100%;
                border-radius: 3px;
                padding-left: 50px;
                font-size: 14px;
                &:placeholder {
                    color: #999999;
                }
            }
            i {
                position: absolute;
                font-size: 26px;
                color: #707070;
                top: 6px;
                left: 6px;
            }
            span {
                position: absolute;
                top: 7px;
                left: 28px;
                font-size: 28px;
                color: #ccc;
            }
            .link-action {
                margin-top: 10px;
                position: relative;
                :first-child {
                    position: absolute;
                    left: 0;
                    color: #666666;
                }
                :last-child {
                    position: absolute;
                    right: 2px;
                    color: $s-d-color;
                }
            }
        }
    }
</style>
<script>
</script>