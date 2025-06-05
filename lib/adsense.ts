// Google AdSense 配置
export const ADSENSE_CONFIG = {
  CLIENT_ID: 'ca-pub-1977656246202122',
  
  // 广告单元ID (这些是示例ID，您需要在AdSense后台创建实际的广告单元)
  AD_SLOTS: {
    HEADER_BANNER: '1234567890',      // 顶部横幅广告
    CONTENT_RECTANGLE: '0987654321',  // 内容区域方形广告
    FOOTER_BANNER: '1122334455',      // 底部横幅广告
    SIDEBAR: '5566778899',            // 侧边栏广告
    IN_ARTICLE: '9988776655',         // 文章内广告
  },
  
  // 广告格式配置
  AD_FORMATS: {
    AUTO: 'auto',
    HORIZONTAL: 'horizontal', 
    RECTANGLE: 'rectangle',
    VERTICAL: 'vertical',
  },
  
  // 常用广告尺寸
  AD_SIZES: {
    LEADERBOARD: { width: '728px', height: '90px' },      // 728x90
    MEDIUM_RECTANGLE: { width: '300px', height: '250px' }, // 300x250
    LARGE_RECTANGLE: { width: '336px', height: '280px' },  // 336x280
    WIDE_SKYSCRAPER: { width: '160px', height: '600px' },  // 160x600
    MOBILE_BANNER: { width: '320px', height: '50px' },     // 320x50
  }
};

// 检查AdSense是否已加载
export const isAdSenseLoaded = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.adsbygoogle !== 'undefined';
};

// 推送广告到AdSense队列
export const pushAd = (): void => {
  try {
    if (isAdSenseLoaded()) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  } catch (error) {
    console.error('AdSense push error:', error);
  }
}; 