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
            <ElMain style="display: flex; height: 100vh;flex: 1;background-color: black;">
                <div style="display: flex;flex-direction: column;width: 100%;justify-content: center;align-items: center;">
                    <h2 style="display: flex;">用邮箱继续</h2>
                    <Input v-model="email" placeholder="请输入邮箱"
                        style="display: flex; border: 1px solid #7c2cf2; border-radius: 8px;padding: 10px;margin-top: 10px;" />
                    <input v-model="password" placeholder="请输入密码"
                        style="display: flex; border: 1px solid #7c2cf2; border-radius: 8px;padding: 10px;margin-top: 50px;margin-bottom: 50px;" />
                    <input v-model="name" placeholder="请输入用户名"
                        style="display: flex; border: 1px solid #7c2cf2; border-radius: 8px;padding: 10px;" />
                </div>
            </ElMain>
            <ElAside style="background-position: center;overflow: hidden;display: flex;height: 100vh;flex: 1;background-image: url('/src/image/right.png');">
            </ElAside>
        </ElContainer>
    </div>
</template>

<script setup lang="ts">
import { ElButton, inputEmits, ElInput, ElContainer, ElAside, ElMain, ElImage } from 'element-plus';
import { ref } from 'vue';
const email = ref("")
const password = ref("")
const name = ref("")
</script>


<style scoped></style>