<template>
    <div style="display: flex;height: 100vh;width: 100%;">
        <ElContainer style="display: flex;height: 100vh;width: 100%;">
            <ElMain style="display: flex; height: 100vh;flex: 1;overflow: hidden;">
                <div
                    style="display: flex;flex-direction: column;width: 100%;justify-content: center;align-items: center;height: 750px;">
                    <h2 style="display: flex;margin-bottom: 20px;font-size: 30px;">用邮箱继续</h2>
                    <div style="display: flex;flex-direction: column;">
                        <div style="padding-left: 5px;padding-right: 5px;position: absolute;background-color: white;color: #9005b0;margin-left: 10px;"
                            v-show="isUserEmailInputFocus">请输入邮箱</div>
                        <input @focusout="userEmailFocusOutEvent" @focusin="userEmailFocusInEvent" v-model="userEmail"
                            :placeholder="userEmailPlaceHolder" class="user-information-input" />
                    </div>
                    <div>
                        <div style="padding-left: 5px;padding-right: 5px;position: absolute;background-color: white;color: #9005b0;margin-left: 10px;"
                            v-show="isUserPasswordInputFocus">请输入密码</div>
                        <input @focusout="userPasswordFocusOutEvent" @focusin="userPasswordFocusInEvent"
                            v-model="userPassword" :placeholder="userPasswordPlaceHolder"
                            class="user-information-input" />
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <div style="padding-left: 5px;padding-right: 5px;position: absolute;background-color: white;color: #9005b0;margin-left: 10px;"
                            v-show="isUserNameInputFocus">请输入用户名</div>
                        <input @focusout="userNameFocusOutEvent" @focusin="userNameFocusInEvent" v-model="userName"
                            :placeholder="userNamePlaceHolder" class="user-information-input" />
                    </div>
                    <div class="verification-code-container" style="display: flex;flex-direction: column;">
                        <div style="padding-left: 5px;padding-right: 5px;position: absolute;background-color: white;color: #9005b0;margin-left: 10px;"
                            v-show="isUserVerificationCodeInputFocus">请输入验证码</div>
                        <input @focusout="userVerificationCodeFocusOutEvent" @focusin="userVerificationCodeFocusInEvent"
                            v-model="userVerificationCode" :placeholder="userVerificationCodePlaceHolder"
                            class="verification-input" />
                        <button class="captcha-button" >获取验证码</button>
                    </div>
                </div>
                <button class="sign-up-button">注册</button>
                <h5 class="tips">注册即表示您同意<a href="#">条款与条件</a>以及<a href="#">隐私政策</a></h5>
                <div class="turn-to-login">
                    <h5>已经注册？<a href="#">立即登录</a></h5>
                </div>
            </ElMain>
            <ElAside
                style="background-position: center;background-size: cover;background-repeat: no-repeat;overflow: hidden;display: flex;height: 100vh;flex: 1;background-image: url('/src/image/right.png');">
            </ElAside>
        </ElContainer>
    </div>
</template>

<script setup lang="ts">
import { ElContainer, ElAside, ElMain } from 'element-plus';
import { ref } from 'vue';
const userEmail = ref("")
const userPassword = ref("")
const userName = ref("")
const userVerificationCode = ref("")
const userNamePlaceHolder = ref("请输入用户名");
const userEmailPlaceHolder = ref("请输入邮箱");
const userPasswordPlaceHolder = ref("请输入密码");
const userVerificationCodePlaceHolder = ref("请输入验证码");
const isUserEmailInputFocus = ref(false);
const isUserNameInputFocus = ref(false);
const isUserPasswordInputFocus = ref(false);
const isUserVerificationCodeInputFocus = ref(false);
const userEmailFocusInEvent = () => {
    isUserEmailInputFocus.value = true;
    userEmailPlaceHolder.value = "";
}
const userEmailFocusOutEvent = () => {
    isUserEmailInputFocus.value = false;
    if (userEmail.value === "") userEmailPlaceHolder.value = "请输入邮箱";
}
const userPasswordFocusInEvent = () => {
    isUserPasswordInputFocus.value = true;
    userPasswordPlaceHolder.value = "";
}
const userPasswordFocusOutEvent = () => {
    isUserPasswordInputFocus.value = false;
    if (userPassword.value === "") userPasswordPlaceHolder.value = "请输入密码";
}
const userNameFocusInEvent = () => {
    isUserNameInputFocus.value = true;
    userNamePlaceHolder.value = "";
}
const userNameFocusOutEvent = () => {
    isUserNameInputFocus.value = false;
    if (userName.value === "") userNamePlaceHolder.value = "请输入用户名";
}
const userVerificationCodeFocusInEvent = () => {
    isUserVerificationCodeInputFocus.value = true;
    userVerificationCodePlaceHolder.value = "";
}
const userVerificationCodeFocusOutEvent = () => {
    isUserVerificationCodeInputFocus.value = false;
    if (userVerificationCode.value === "") userVerificationCodePlaceHolder.value = "请输入验证码";
}

</script>


<style scoped>
.user-information-input {
    display: flex;
    width: 50vh;
    border-radius: 5px;
    padding: 10px;
    height: 30px;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 8px;
    border: 1px solid grey;
}

.verification-input {
    display: flex;
    flex: 2;
    border-radius: 5px;
    padding: 10px;
    height: 30px;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 8px;
    border: 1px solid grey;
}

.captcha-button {
    display: flex;
    flex: 1;
    width: 100px;
    height: 36px;
    padding: 0 12px;
    background: #f3f3f3;
    border: 1px solid #ccc;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    color: #333;
}

.captcha-button:hover {
    border-color: #9005b0;
    color: #9005b0;
}

.floating-note {
    position: absolute;
    left: 8px;
    top: -14px;
    background-color: white;
    color: #9005b0;
    padding: 0 6px;
    font-size: 12px;
}

.user-information-input:focus,
.verification-input:focus {
    outline: none;
    border: 2px solid #9005b0;
}

.user-information-input:focus {
    outline: none;
    border: 2px solid #9005b0;
}

.sign-up-button {
    position: absolute;
    bottom: 300px;
    left: 25%;
    transform: translateX(-50%);
    width: 200px;
    height: 50px;
    background-color: #9005b0;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

.sign-up-button:hover {
    background-color: #a40ad3;
}

/* tips是条款条件 */
.tips {
    position: absolute;
    bottom: 250px;
    left: 25%;
    transform: translateX(-50%);
    color: grey;
}

.tips a,
.tips a:visited {
    color: inherit;
    text-decoration-line: underline;
    text-decoration-color: currentColor;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    text-decoration-style: solid;
}

.turn-to-login {
    position: absolute;
    bottom: 200px;
    left: 25%;
    transform: translateX(-50%);
}
</style>