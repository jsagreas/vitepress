<template>
  <Transition name="fade">
    <div
      v-show="visible"
      class="back-to-top"
      :class="{ active: isActive }"
      @click="handleClick"
    >
      <!-- 撒花粒子 -->
      <div class="confetti-container" v-if="showConfetti">
        <span v-for="i in 12" :key="i" class="confetti" :class="`confetti-${i}`"></span>
      </div>
      
      <!-- 箭头图标 -->
      <svg
        class="arrow-icon"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 19V5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M5 12L12 5L19 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
const isActive = ref(false)
const showConfetti = ref(false)

function handleScroll() {
  visible.value = window.scrollY > 400
}

function handleClick() {
  isActive.value = true
  showConfetti.value = true
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  
  setTimeout(() => {
    isActive.value = false
  }, 300)
  
  setTimeout(() => {
    showConfetti.value = false
  }, 1000)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: visible;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.back-to-top.active {
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  transform: scale(0.95);
}

.arrow-icon {
  color: #4a5568;
  transition: color 0.3s ease;
  position: relative;
  z-index: 2;
}

.back-to-top:hover .arrow-icon {
  color: #4ECDC4;
}

.back-to-top.active .arrow-icon {
  color: white;
}

/* 撒花效果 */
.confetti-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.confetti {
  position: absolute;
  width: 6px;
  height: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

/* 12个不同颜色和方向的粒子 */
.confetti-1 { background: #FF6B6B; animation: burst-1 1s ease-out forwards; }
.confetti-2 { background: #4ECDC4; animation: burst-2 1s ease-out forwards; }
.confetti-3 { background: #45B7D1; animation: burst-3 1s ease-out forwards; }
.confetti-4 { background: #FFA07A; animation: burst-4 1s ease-out forwards; }
.confetti-5 { background: #98D8C8; animation: burst-5 1s ease-out forwards; }
.confetti-6 { background: #F7DC6F; animation: burst-6 1s ease-out forwards; }
.confetti-7 { background: #BB8FCE; animation: burst-7 1s ease-out forwards; }
.confetti-8 { background: #85C88A; animation: burst-8 1s ease-out forwards; }
.confetti-9 { background: #FFB6C1; animation: burst-9 1s ease-out forwards; }
.confetti-10 { background: #87CEEB; animation: burst-10 1s ease-out forwards; }
.confetti-11 { background: #FF69B4; animation: burst-11 1s ease-out forwards; }
.confetti-12 { background: #9370DB; animation: burst-12 1s ease-out forwards; }

/* 撒花动画 - 12个方向 */
@keyframes burst-1 { to { transform: translate(-50%, -50%) translateX(-40px) translateY(-40px); opacity: 0; } }
@keyframes burst-2 { to { transform: translate(-50%, -50%) translateX(40px) translateY(-40px); opacity: 0; } }
@keyframes burst-3 { to { transform: translate(-50%, -50%) translateX(-40px) translateY(40px); opacity: 0; } }
@keyframes burst-4 { to { transform: translate(-50%, -50%) translateX(40px) translateY(40px); opacity: 0; } }
@keyframes burst-5 { to { transform: translate(-50%, -50%) translateX(-50px) translateY(0); opacity: 0; } }
@keyframes burst-6 { to { transform: translate(-50%, -50%) translateX(50px) translateY(0); opacity: 0; } }
@keyframes burst-7 { to { transform: translate(-50%, -50%) translateX(0) translateY(-50px); opacity: 0; } }
@keyframes burst-8 { to { transform: translate(-50%, -50%) translateX(0) translateY(50px); opacity: 0; } }
@keyframes burst-9 { to { transform: translate(-50%, -50%) translateX(-35px) translateY(-25px); opacity: 0; } }
@keyframes burst-10 { to { transform: translate(-50%, -50%) translateX(35px) translateY(-25px); opacity: 0; } }
@keyframes burst-11 { to { transform: translate(-50%, -50%) translateX(-25px) translateY(35px); opacity: 0; } }
@keyframes burst-12 { to { transform: translate(-50%, -50%) translateX(25px) translateY(35px); opacity: 0; } }

/* 渐入渐出 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* 深色模式 */
.dark .back-to-top {
  background-color: #2c2c2c;
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .arrow-icon {
  color: #a0a0a0;
}

.dark .back-to-top:hover .arrow-icon {
  color: #4ECDC4;
}

/* 移动端 */
@media (max-width: 768px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 31px;
    height: 31px;
  }
  
  .arrow-icon {
    width: 15px;
    height: 15px;
  }
}
</style>