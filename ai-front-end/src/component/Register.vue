<template>
    <div style="display: flex;height: 100vh;width: 100%;">
        <ElContainer style="display: flex;height: 100vh;width: 100%;">
            <ElMain style="display: flex; height: 100vh;flex: 1;overflow: hidden;">
                <div
                    style="display: flex;flex-direction: column;width: 100%;justify-content: center;align-items: center;">
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
const userNamePlaceHolder = ref("请输入用户名");
const userEmailPlaceHolder = ref("请输入邮箱");
const userPasswordPlaceHolder = ref("请输入密码");
const isUserEmailInputFocus = ref(false);
const isUserNameInputFocus = ref(false);
const isUserPasswordInputFocus = ref(false);
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
    border: 1px solid grey;
}

.user-information-input:focus {
    outline: none;
    border: 2px solid #9005b0;
}
</style>