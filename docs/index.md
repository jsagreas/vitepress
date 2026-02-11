# 网站导航

<style>
/* 响应式样式 */
@media (max-width: 768px) {
  /* 移动端三栏变单栏 */
  .nav-row {
    flex-direction: column !important;
    gap: 15px !important;
  }
  
  /* 移动端卡片样式调整 */
  .nav-card {
    height: auto !important;
    min-height: 100px !important;
    margin: 0 20px !important;
  }
  
  /* 移动端标题字体调整 */
  .section-title {
    font-size: 20px !important;
    margin: 15px 0 8px 0 !important;
  }
  
  /* 移动端图标和文字调整 */
  .nav-card .icon {
    width: 28px !important;
    height: 28px !important;
    font-size: 12px !important;
  }
  
  .nav-card h3 {
    font-size: 15px !important;
  }
  
  .nav-card p {
    font-size: 12px !important;
    padding: 0 5px !important;
  }
}

@media (max-width: 480px) {
  /* 超小屏幕进一步优化 */
  .nav-card {
    margin: 0 10px !important;
    padding: 12px !important;
  }
  
  .section-title {
    font-size: 18px !important;
  }
  
  .nav-card h3 {
    font-size: 14px !important;
  }
  
  .nav-card p {
    font-size: 11px !important;
  }
}
</style>

<h2 class="section-title" style="text-align: center; margin: 20px 0 10px 0; color: #333; font-size: 24px; font-weight: bold;">搜索引擎</h2>

<!-- 三栏搜索引擎导航 -->
<div class="nav-row" style="display: flex; gap: 30px; max-width: 1000px; margin: 20px auto; font-family: Arial, sans-serif;">

  <!-- 百度栏 -->
  <a href="https://www.baidu.com" target="_blank" style="text-decoration: none; flex: 1;">
    <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
      <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
        <div class="icon" style="width: 32px; height: 32px; background: #2932e1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 14px;">
          百
        </div>
        <h3 style="margin: 0; color: #333; font-size: 16px;">百度</h3>
      </div>
      <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
        全球最大的中文搜索引擎，提供网页搜索、图片、视频等服务
      </p>
    </div>
  </a>

  <!-- Google栏 -->
  <a href="https://www.google.com" target="_blank" style="text-decoration: none; flex: 1;">
    <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
      <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
        <div class="icon" style="width: 32px; height: 32px; background: linear-gradient(45deg, #4285f4, #ea4335, #fbbc04, #34a853); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 14px;">
          G
        </div>
        <h3 style="margin: 0; color: #333; font-size: 16px;">Google</h3>
      </div>
      <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
        全球最大的搜索引擎，提供精准的网页搜索和智能服务
      </p>
    </div>
  </a>

  <!-- Bing栏 -->
  <a href="https://www.bing.com" target="_blank" style="text-decoration: none; flex: 1;">
    <div class="nav-card" style="text-decoration: none; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
      <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
        <div class="icon" style="width: 32px; height: 32px; background: #00bcf2; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 14px;">
          B
        </div>
        <h3 style="margin: 0; color: #333; font-size: 16px;">Bing</h3>
      </div>
      <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
        微软搜索引擎，集成AI功能，提供图像和视频搜索
      </p>
    </div>
  </a>
</div>

<h2 class="section-title" style="text-align: center; margin: 20px 0 10px 0; color: #333; font-size: 24px; font-weight: bold;">AI网站</h2>

<!-- AI平台服务导航 -->
<div style="max-width: 1000px; margin: 20px auto; font-family: Arial, sans-serif;">
  <!-- 第一行：主流AI平台 -->
  <div class="nav-row" style="display: flex; gap: 30px; margin-bottom: 20px;">
    <!-- 腾讯元宝 -->
    <a href="https://yuanbao.tencent.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #00D4FF; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            元宝
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">腾讯元宝</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          腾讯推出的AI助手，集成对话、创作、搜索功能，支持微信生态无缝使用
        </p>
      </div>
    </a>
    <!-- 通义千问 -->
    <a href="https://tongyi.aliyun.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #722ED1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            通义
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">通义千问</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          阿里巴巴大模型，专业的中文对话AI，擅长创作、推理、办公场景应用
        </p>
      </div>
    </a>
    <!-- 豆包 -->
    <a href="https://www.doubao.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #1677FF; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            豆包
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">豆包</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          字节跳动AI助手，年轻化设计，支持多模态交互和个性化对话体验
        </p>
      </div>
    </a>
  </div>
  <!-- 第二行：专业AI平台 -->
  <div class="nav-row" style="display: flex; gap: 30px;">
    <!-- DeepSeek -->
    <a href="https://www.deepseek.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #1A1A1A; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 11px;">
            DeepS
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">DeepSeek</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          专注深度学习的AI平台，提供强大的代码生成和数学推理能力
        </p>
      </div>
    </a>
    <!-- Kimi -->
    <a href="https://kimi.moonshot.cn" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #6366F1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            Kimi
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">Kimi</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          月之暗面AI助手，擅长长文本处理和深度分析，支持超长对话记忆
        </p>
      </div>
    </a>
    <!-- 讯飞星火 -->
    <a href="https://xinghuo.xfyun.cn" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #FF6B35; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            星火
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">讯飞星火</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          科大讯飞认知大模型，语音交互见长，多模态AI能力和教育场景优化
        </p>
      </div>
    </a>
  </div>
</div>

<h2 class="section-title" style="text-align: center; margin: 20px 0 10px 0; color: #333; font-size: 24px; font-weight: bold;">云服务器</h2>

<!-- 云服务提供商导航 -->
<div style="max-width: 1000px; margin: 20px auto; font-family: Arial, sans-serif;">
  <!-- 第一行：国际云服务 -->
  <div class="nav-row" style="display: flex; gap: 30px; margin-bottom: 20px;">
    <!-- 亚马逊云 -->
    <a href="https://aws.amazon.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #FF9800; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 14px;">
            AWS
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">亚马逊云</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          全球领先的云计算平台，提供弹性计算、存储、数据库等200多项服务
        </p>
      </div>
    </a>
    <!-- 微软云 -->
    <a href="https://azure.microsoft.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #0078D4; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 14px;">
            Az
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">微软云</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          微软Azure云平台，企业级云服务，与Office365深度集成的智能云解决方案
        </p>
      </div>
    </a>
    <!-- 谷歌云 -->
    <a href="https://cloud.google.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: linear-gradient(45deg, #4285f4, #ea4335, #fbbc04, #34a853); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 14px;">
            GC
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">谷歌云</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          Google Cloud Platform，基于谷歌基础设施的云服务，AI和大数据处理能力突出
        </p>
      </div>
    </a>
  </div>
  <!-- 第二行：国内云服务 -->
  <div class="nav-row" style="display: flex; gap: 30px;">
    <!-- 阿里云 -->
    <a href="https://www.aliyun.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #FF6A00; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 14px;">
            阿里
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">阿里云</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          中国领先的云计算服务商，为企业提供计算、存储、网络、安全等全栈云服务
        </p>
      </div>
    </a>
    <!-- 腾讯云 -->
    <a href="https://cloud.tencent.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #006EFF; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 14px;">
            腾讯
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">腾讯云</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          腾讯旗下云计算品牌，依托QQ、微信等产品技术优势，提供稳定可靠的云服务
        </p>
      </div>
    </a>
    <!-- 天翼云 -->
    <a href="https://www.ctyun.cn" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #E60012; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 14px;">
            天翼
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">天翼云</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          中国电信旗下云服务品牌，基于5G网络优势，提供安全可信的政企云服务
        </p>
      </div>
    </a>
  </div>
</div>

<h2 class="section-title" style="text-align: center; margin: 20px 0 10px 0; color: #333; font-size: 24px; font-weight: bold;">邮箱存储</h2>

<!-- 邮箱存储服务导航 -->
<div style="max-width: 1000px; margin: 30px auto; font-family: Arial, sans-serif;">
  <!-- 第一行：网盘存储 -->
  <div class="nav-row" style="display: flex; gap: 30px; margin-bottom: 20px;">
    <!-- 百度网盘 -->
    <a href="https://pan.baidu.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #2932e1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            网盘
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">百度网盘</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          国内最大的个人云存储服务，免费提供2TB空间，支持多终端同步和分享
        </p>
      </div>
    </a>
    <!-- 阿里云盘 -->
    <a href="https://www.aliyundrive.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #FF6A00; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            云盘
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">阿里云盘</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          阿里巴巴推出的个人网盘，不限速上传下载，智能相册管理和文件预览
        </p>
      </div>
    </a>
    <!-- 谷歌云盘 -->
    <a href="https://drive.google.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: linear-gradient(45deg, #4285f4, #ea4335, #fbbc04, #34a853); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            Drive
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">谷歌云盘</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          Google Drive云存储服务，与Gmail、Docs深度整合，15GB免费空间
        </p>
      </div>
    </a>
  </div>
  <!-- 第二行：邮箱服务 -->
  <div class="nav-row" style="display: flex; gap: 30px;">
    <!-- Gmail -->
    <a href="https://gmail.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #ea4335; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            Gmail
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">Gmail</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          全球最受欢迎的免费邮箱服务，15GB存储空间，强大的垃圾邮件过滤功能
        </p>
      </div>
    </a>
    <!-- QQ邮箱 -->
    <a href="https://mail.qq.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #12B7F5; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            QQ
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">QQ邮箱</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          腾讯旗下邮箱服务，与QQ账号绑定，国内用户使用广泛，界面简洁易用
        </p>
      </div>
    </a>
    <!-- iCloud -->
    <a href="https://www.icloud.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #007AFF; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            iCloud
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">iCloud</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          苹果云服务平台，包含邮箱、存储、同步等功能，与苹果设备无缝整合
        </p>
      </div>
    </a>
  </div>
</div>

<h2 class="section-title" style="text-align: center; margin: 20px 0 10px 0; color: #333; font-size: 24px; font-weight: bold;">学习网站</h2>

<!-- 编程学习网站导航 -->
<div style="max-width: 1000px; margin: 20px auto; font-family: Arial, sans-serif;">
  <!-- 第一行：问答与文档平台 -->
  <div class="nav-row" style="display: flex; gap: 30px; margin-bottom: 20px;">
    <!-- Stack Overflow -->
    <a href="https://stackoverflow.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #F48024; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 11px;">
            SO
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">Stack Overflow</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          全球最大的程序员问答社区，技术问题解决首选，高质量答案和代码示例
        </p>
      </div>
    </a>
    <!-- GitHub -->
    <a href="https://github.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #24292e; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 11px;">
            Git
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">GitHub</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          全球最大代码托管平台，开源项目学习宝库，版本控制和协作开发必备
        </p>
      </div>
    </a>
    <!-- W3Schools -->
    <a href="https://www.w3schools.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #04AA6D; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 11px;">
            W3
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">W3Schools</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          Web技术入门首选，HTML、CSS、JavaScript基础教程，简单易懂的在线学习
        </p>
      </div>
    </a>
  </div>
  <!-- 第二行：教程与实践平台 -->
  <div class="nav-row" style="display: flex; gap: 30px;">
    <!-- LeetCode -->
    <a href="https://leetcode.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #FFA116; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 11px;">
            LC
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">LeetCode</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          算法题刷题平台，面试准备神器，提升编程思维和解决问题能力
        </p>
      </div>
    </a>
    <!-- 菜鸟教程 -->
    <a href="https://www.runoob.com" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #5CB85C; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 13px;">
            菜鸟
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">菜鸟教程</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          国内最受欢迎的编程入门教程网站，简单易懂，在线编辑器即学即练
        </p>
      </div>
    </a>
    <!-- GeeksforGeeks -->
    <a href="https://www.geeksforgeeks.org" target="_blank" style="text-decoration: none; flex: 1;">
      <div class="nav-card" style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; height: 130px; display: flex; flex-direction: column; justify-content: space-between;" 
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <div class="icon" style="width: 32px; height: 32px; background: #0F9D58; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 8px; font-size: 11px;">
            GfG
          </div>
          <h3 style="margin: 0; color: #333; font-size: 16px;">GeeksforGeeks</h3>
        </div>
        <p style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; flex: 1; display: flex; align-items: center; justify-content: center;">
          计算机科学知识库，算法数据结构详解，面试题目和编程竞赛资源丰富
        </p>
      </div>
    </a>
  </div>
</div>