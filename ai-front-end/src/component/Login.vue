<template>
    <div >
        <ElContainer style="background-position: center;background-size: cover;display: flex;flex-direction: column;height:100vh;width: 100%;background-image: url('/src/image/background.png');">
            <ElHeader
                style="background-position: center;background-size: cover;background-repeat: no-repeat;overflow: hidden;display: flex;justify-content: space-between;align-items: center;height: 10vh;flex: 1;margin-top: 0;">
                <img src="/src/image/logo2.png" alt="Logo" class="logo-left" />
                <div class="register-container">
                    <h3>没有账号？</h3>
                    <button class="register-button">注册</button>
                </div>
            </ElHeader>
            <ElMain style="display: flex;justify-content: center;align-items: center;flex: 1;flex-direction: column;">
                <div
                class="login-container"    
                style="display: flex;flex-direction: column;width: 100%;justify-content: center;align-items: center;height: 750px;">
                    <h2>欢迎回来</h2>
                    <div class="login-form">
                        <div>
                            <input v-model="userEmail" placeholder="输入你的邮箱" class="user-information-input" />
                        </div>
                        <div>
                            <input v-model="userPassword" placeholder="输入你的密码" class="user-information-input"/>
                        </div>
                        <button class="login-button">登录</button>
                    </div>
                </div>
                <div>
                    <h4>本网站受 reCAPTCHA 保护，适用 Google<a href="#">隐私政策</a>和<a href="#">服务条款</a></h4>
                </div>
            </ElMain>
            <ElFooter style="display: flex;flex-direction: column;align-items: center;justify-content: center;flex: 1;height: 10vh;margin:auto;">
            </ElFooter>
        </ElContainer>

    </div>

</template>

<script lang="ts" setup>
import { ElHeader, ElMain, ElFooter, ElContainer } from 'element-plus';
import { ref } from 'vue';

const userEmail = ref("");
const userPassword = ref("");
</script>

<style scoped>
.login-container {
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    max-width: 500px;
    max-height: 400px;
    margin: 80px;
    box-shadow: #686565 0px 4px 12px;
    border-radius: 12px;
}
.login-button{
    margin-top: 20px;
    padding: 10px 110px;
    background-color: #766ce0;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}
.login-button:hover {
    background-color: #661ac1;
}
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0 0 0;
}

.user-information-input {
    display: flex;
    border-radius: 5px;
    padding: 10px;
    height: 30px;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 8px;
    border: 1px solid grey;
}

.logo-left {
    display: flex;
    margin-left: 20px;
    width: 150px;
    height: auto;
}

.register-container {
    display: flex;
    margin: 40px 40px auto 0;
    color: #544f4f;
    align-items: baseline;
    gap: 10px;
    padding: 20px 10px;
}

.register-container h3 {
    margin: 0;
    padding: 0;
    color: #686565;
    font-weight: 500;
    font-size: 16px;
}

.register-button {
    margin: auto;
    padding: 8px 16px;
    background-color: #7558e7;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    line-height: 1;
}
</style>