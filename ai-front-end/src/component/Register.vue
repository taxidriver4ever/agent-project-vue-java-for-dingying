<template>
    <!-- <el-container>
    <el-header>
        <h2>用邮箱继续</h2>
    </el-header>
    <el-asider class="left-asider"></el-asider>
    <el-footer></el-footer>
</el-container> -->
    <div style="display: flex;height: 100vh;width: 100%;">
        <ElContainer style="display: flex;height: 100vh;width: 100%;">
            <ElMain style="display: flex; height: 100vh;flex: 1;">
                <div
                    style="display: flex;flex-direction: column;width: 100%;justify-content: center;align-items: center;">
                    <h2 style="display: flex;">用邮箱继续</h2>
                    <input v-model="UserEmail" :placeholder="!emailFocused && !UserEmail ? '请输入邮箱' : ''"
                        class="user-information-input" @focus="emailFocused = true"
                        @blur="nameFocused = UserName ? true : false" />
                    <label class="floating-label" :class="{ 'floating-label-active': emailFocused || UserEmail }">
                        Email Address
                    </label>
                    <input v-model="UserPassword" :placeholder="!pwdFocused && !UserPassword ? '请输入密码' : ''"
                        class="user-information-input" @focus="pwdFocused = true"
                        @blur="pwdFocused = UserPassword ? true : false" />
                    <label class="floating-label" :class="{ 'floating-label-active': pwdFocused || UserPassword }">
                        Password
                    </label>
                    <input v-model="UserName" :placeholder="!nameFocused && !UserName ? '请输入用户名' : ''"
                        class="user-information-input" @focus="nameFocused = true"
                        @blur="nameFocused = UserName ? true : false" />
                    <label class="floating-label" :class="{ 'floating-label-active': nameFocused || UserName }">
                        User Name
                    </label>

                </div>
            </ElMain>
            <ElAside
                style="background-position: center;overflow: hidden;display: flex;height: 100vh;flex: 1;background-image: url('/src/image/right.png');">
            </ElAside>
        </ElContainer>
    </div>
</template>

<script setup lang="ts">
import { ElButton, inputEmits, ElInput, ElContainer, ElAside, ElMain, ElImage } from 'element-plus';
import { ref } from 'vue';
const UserEmail = ref("")
const UserPassword = ref("")
const UserName = ref("")
const pwdFocused = ref(false)
const emailFocused = ref(false)
const nameFocused = ref(false)

</script>


<style scoped>
.user-information-input {
    display: flex;
    border: 1px solid #7c2cf2;
    border-radius: 8px;
    padding: 10px;
    margin-top: 50px;
    margin-bottom: 50px
}

.floating-label {
    left: 12px;
    top: -8px;
    background: #fff;
    color: #7c2cf2;
    font-size: 12px;
    padding: 0 4px;
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s ease;
}

.floating-label-active {
    top: 10px;
    font-size: 14px;
    opacity: 1;
}

</style>