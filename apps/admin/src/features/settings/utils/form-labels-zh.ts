/**
 * Chinese labels for backend config form-schema strings.
 *
 * Root cause: configs.schema / groupConfigs ship English UI copy (since
 * 77ce8dd4). Admin chrome is i18n-aware, so ZH locale mixed EN form labels.
 * Localize English form strings here until the API exposes bilingual labels.
 */
export const FORM_LABEL_ZH: Readonly<Record<string, string>> = {
  Site: '网站',
  'Site URL, SEO': '站点地址、SEO',
  Content: '内容',
  'Comments, friend links': '评论、友链',
  Notifications: '通知',
  'Email, Bark push': '邮件、Bark 推送',
  'Search push': '搜索推送',
  'Search engines, full-text search': '搜索引擎、全文检索',
  Storage: '存储',
  'Backup, image hosting, comment image uploads': '备份、图床、评论图片上传',
  AI: 'AI',
  'AI summary, writing assistant': 'AI 摘要、写作助手',
  'Third-party integrations': '第三方集成',
  'GitHub, TMDB, Bangumi, etc.': 'GitHub、TMDB、Bangumi 等',
  System: '系统',
  'Admin settings, feature toggles': '后台设置、功能开关',
  Settings: '设置',
  '* Sensitive fields are hidden; the backend does not return them by default, so they appear empty':
    '* 敏感字段不显示，后端默认不返回敏感字段，显示为空',
  SEO: 'SEO',
  'Site URLs': '网站设置',
  'Email notifications': '邮件通知设置',
  'Comment settings': '评论设置',
  Backup: '备份',
  'Image storage': '图床设置',
  'Comment image uploads': '评论图片上传',
  'File upload settings': '文件上传设定',
  'Baidu push settings': '百度推送设定',
  'Bing push settings': 'Bing 推送设定',
  'Admin extras': '后台附加设置',
  'Friend link settings': '友链设定',
  'Bark notifications': 'Bark 通知设定',
  'Feature toggles': '特征开关设定',
  GitHub: 'GitHub',
  TMDB: 'TMDB',
  Bangumi: 'Bangumi',
  NeoDB: 'NeoDB',
  Arxiv: 'Arxiv',
  'Twelve Data': 'Twelve Data',
  'Polygon.io': 'Polygon.io',
  Leetcode: 'Leetcode',
  'NetEase Cloud Music': '网易云音乐',
  'QQ Music': 'QQ 音乐',
  'Open Graph / oEmbed fallback': 'Open Graph / oEmbed 兜底',
  Screenshot: '截图',
  'Auth security': '认证安全设置',
  'AI settings': 'AI 设定',
  OAuth: 'OAuth',
  'SMTP configuration': 'SMTP 配置',
  'Resend configuration': 'Resend 配置',
  'AI provider configuration': 'AI Provider 配置',
  'AI model assignment': 'AI 模型分配',
  'Site title': '网站标题',
  'Site description': '网站描述',
  'Light icon URL': '浅色图标 URL',
  'Dark icon URL': '深色图标 URL',
  Keywords: '关键字',
  'Per-locale SEO overrides': '按语言覆盖 SEO',
  'Frontend URL': '前端地址',
  'Admin dashboard URL': '管理后台地址',
  'API URL': 'API 地址',
  'Gateway URL': 'Gateway 地址',
  'SMTP username': 'SMTP 用户名',
  'SMTP password': 'SMTP 密码',
  'SMTP host': 'SMTP 主机',
  'SMTP port': 'SMTP 端口',
  'Use SSL/TLS': '使用 SSL/TLS',
  'Resend API Key': 'Resend API Key',
  'Enable email notifications': '开启邮箱提醒',
  'Email provider': '邮件服务商',
  SMTP: 'SMTP',
  Resend: 'Resend',
  'Sender email address': '发件邮箱地址',
  'Required for Resend; optional for SMTP (defaults to the SMTP username if omitted)':
    'Resend 必填；SMTP 可选，不填则使用 SMTP 用户名',
  'Send rate limit': '发送速率限制',
  'Maximum sends per second; defaults to 10': '每秒最大发送次数，默认 10',
  'Send failure retry count': '发送失败重试次数',
  'Maximum retries after a send failure; defaults to 3':
    '发送失败后的最大重试次数，默认 3',
  'Anti-spam': '反垃圾评论',
  'Enable AI review': '开启 AI 审核',
  'AI review mode': 'AI 审核方式',
  Binary: '是非',
  Score: '评分',
  'Defaults to binary; score mode is also available':
    '默认为是非，也可以选择评分',
  'AI review threshold': 'AI 审核阈值',
  'Scores above this value are classified as spam. Range 1-10, default 5':
    '分数大于该值会被归类为垃圾评论，范围为 1-10，默认为 5',
  'Test AI review': '测试 AI 审核',
  'Enter test content to verify whether AI review is working correctly':
    '输入测试内容，验证 AI 审核功能是否正常工作',
  Test: '测试',
  'Disable comments site-wide': '全站禁止评论',
  'Reserved for sensitive periods': '敏感时期专用',
  'Allow comments without login': '允许未登录评论',
  'When disabled, only signed-in readers or the owner can comment and reply':
    '关闭后，只有已登录读者或站长可以评论和回复',
  'Custom blocked keywords': '自定义屏蔽关键词',
  'Custom blocked IPs': '自定义屏蔽 IP',
  'Reject non-Chinese comments': '禁止非中文评论',
  'Only show approved comments': '只展示已审核评论',
  'Publicly display comment location': '评论公开归属地',
  'Enable automatic backup': '开启自动备份',
  'Fill in the S3 information below to also upload backups to S3':
    '填写以下 S3 信息，将同时上传备份到 S3',
  'S3 endpoint': 'S3 服务端点',
  SecretId: 'SecretId',
  SecretKey: 'SecretKey',
  Bucket: 'Bucket',
  Region: 'Region',
  'Enable S3 image storage': '开启 S3 图床',
  'Access Key ID': 'Access Key ID',
  'Secret Access Key': 'Secret Access Key',
  'Custom domain (CDN)': '自定义域名 (CDN)',
  'Used to replace the default S3 URL, e.g. a CDN domain':
    '用于替换默认的 S3 URL，例如 CDN 域名',
  'File path prefix': '文件路径前缀',
  'Path prefix for files uploaded to S3. Supports placeholders: {Y} 4-digit year, {y} 2-digit year, {m} month, {d} day, {h} hour, {i} minute, {s} second, {md5} random MD5, {type} file type, etc. Example: blog/{Y}/{m}/{d} or images/':
    '上传到 S3 的文件路径前缀，支持模板占位符: {Y}年4位, {y}年2位, {m}月, {d}日, {h}时, {i}分, {s}秒, {md5}随机MD5, {type}文件类型等。例如: blog/{Y}/{m}/{d} 或 images/',
  'Comment image path prefix': '评论图片路径前缀',
  'Path prefix dedicated to reader comment uploads. Defaults to comments/{readerId}/{Y}/{m}/{md5}.{ext} when empty. Placeholders are the same as prefix, with additional support for {readerId}':
    '读者评论上传专用路径前缀，留空则使用 comments/{readerId}/{Y}/{m}/{md5}.{ext}。占位符同 prefix，且额外支持 {readerId}',
  'Enable reader comment image uploads': '启用读者评论图片上传',
  'When disabled, the frontend hides the upload entry and the backend returns 503':
    '关闭则前端隐藏上传入口，且后端接口返回 503',
  'Pending TTL (minutes)': '待引用保留时长（分钟）',
  'Retention time for uploaded images not yet referenced by a comment; expired ones are removed. Default 120':
    '上传后未被评论引用的保留时长，过期清除。默认 120',
  'Detached TTL (minutes)': '已脱离保留时长（分钟）',
  'Retention time for images removed by a comment edit. Default 30':
    '评论编辑后被移除的图片保留时长。默认 30',
  'Cleanup interval (minutes)': '清理间隔（分钟）',
  'Default 15': '默认 15',
  'Max size per image (MB)': '单图最大大小（MB）',
  'Default 5': '默认 5',
  'Max images per comment': '单条评论最大图片数',
  'Default 4': '默认 4',
  'Max uploads per reader per hour': '读者每小时最大上传数',
  'Default 10': '默认 10',
  'Max total active image storage per reader (MB)':
    '读者活跃图片总容量上限（MB）',
  'Default 50': '默认 50',
  'Minimum reader account age (hours)': '读者账号最低注册时长（小时）',
  'Eligibility threshold; 0 means no limit. Default 0':
    '准入门槛，0 表示不限。默认 0',
  'Minimum comments posted by reader': '读者最低评论数',
  'Delete images when comment is marked as spam': '评论标记 spam 时同步删图',
  'Enabled by default. When disabled, only the comment is removed and images are kept for manual review':
    '默认开启。关闭则仅删评论，保留图待手动处理',
  'MIME whitelist': 'MIME 白名单',
  'Defaults to image/jpeg, image/png, image/webp, image/gif. Changes take effect immediately':
    '默认 image/jpeg, image/png, image/webp, image/gif。修改后立即生效',
  'Enable custom file naming': '启用自定义文件命名',
  'When enabled, the naming templates below are applied':
    '开启后将使用下方的命名模板规则',
  'Filename template': '文件名模板',
  'Supported placeholders: {Y} 4-digit year, {y} 2-digit year, {m} month, {d} day, {h} hour, {i} minute, {s} second, {ms} milliseconds, {timestamp} timestamp, {md5} random MD5, {md5-16} random MD5 (16 chars), {uuid} UUID, {str-<n>} random string of length n, {filename} original filename (with extension), {name} original filename (without extension), {ext} extension':
    '支持占位符: {Y}年4位, {y}年2位, {m}月, {d}日, {h}时, {i}分, {s}秒, {ms}毫秒, {timestamp}时间戳, {md5}随机MD5, {md5-16}随机MD5(16位), {uuid}UUID, {str-数字}随机字符串, {filename}原文件名(含扩展名), {name}原文件名(不含扩展名), {ext}扩展名',
  'File path template': '文件路径模板',
  'Same placeholders as the filename template, plus {type} for file type and {localFolder:<n>} for the n-th original folder level':
    '支持占位符同文件名模板，另外支持 {type} 文件类型, {localFolder:数字} 原文件所在文件夹层级',
  'Max video upload size on local storage (MB)':
    '本地存储视频上传大小上限（MB）',
  'Default 100. Applies to local-disk storage only; S3 storage uploads are unlimited':
    '默认 100。仅作用于本地磁盘存储；S3 上传不限大小',
  'Enable push': '开启推送',
  Token: 'Token',
  'Bing API key': 'Bing API 密钥',
  'Enable admin reverse proxy': '开启后台管理反代',
  'Whether the admin dashboard can be accessed through the API':
    '是否可以通过 API 访问后台',
  'Login page background': '登录页面背景',
  'Amap query API key': '高德查询 API Key',
  'Location lookup for diary entries': '日记地点定位',
  'Allow friend link applications': '允许申请友链',
  'Allow sub-path friend links': '允许子路径友链',
  'For example, a /blog sub-path': '例如 /blog 子路径',
  'Internalize friend link avatars': '友链头像转内链',
  'After approval, the friend link avatar is downloaded and converted to an internal link. Only common image formats are supported; other formats are not converted':
    '通过审核后将会下载友链头像并改为内部链接，仅支持常见图片格式，其他格式将不会转换',
  'Enable Bark notifications': '开启 Bark 通知',
  'Device key': '设备 Key',
  'Server URL': '服务器 URL',
  'Defaults to the public server, https://day.app, when empty':
    '如果不填写，则使用默认的服务器，https://day.app',
  'Enable comment notifications': '开启评论通知',
  'Notify on rate-limited requests': '开启请求被限流时通知',
  'Sends a notification when requests are rate-limited; can serve as an early warning for attacks':
    '当请求被限流会通知，或许可以一定程度上预警被攻击',
  'Enable email subscription': '开启邮件推送订阅',
  Enabled: '启用',
  'Personal Access Token': 'Personal Access Token',
  'Used when calling the GitHub API; fill in when you hit rate limits':
    '调用 GitHub API；遇限流时填写',
  'API Key': 'API Key',
  'Access Token': 'Access Token',
  'Stock quote data source, https://twelvedata.com':
    '股票行情数据源，https://twelvedata.com',
  'Stock bars data source, https://polygon.io':
    '股票 K 线数据源，https://polygon.io',
  'Fetches Open Graph / oEmbed metadata as a link card fallback for URLs not handled by a dedicated provider':
    '未命中专用 provider 的 URL 抓取 Open Graph / oEmbed 元数据作为链接卡兜底',
  'Fetch mode': '抓取模式',
  'HTTP fetch': 'HTTP 直抓（fetch）',
  'Headless browser (agent-browser)': '无头浏览器（agent-browser）',
  'Defaults to HTTP fetch. For Cloudflare-protected or anti-bot sites, switch to browser mode to render via the chromium bundled in Docker. Browser mode is slower and more expensive.':
    '默认 HTTP 直抓。遇 Cloudflare / 强反爬站点时切 browser 走 Docker 内置 chromium 渲染。browser 模式更慢，也更贵。',
  'Fetch timeout (milliseconds)': '抓取超时（毫秒）',
  'Defaults to 8000 in fetch mode and 25000 in browser mode. Range 1000-60000':
    'fetch 模式默认 8000；browser 模式默认 25000。区间 1000-60000',
  'Max response size (bytes)': '最大响应体积（字节）',
  'Defaults to 524288 (512KB); range 16KB-4MB; only the <head> is scanned':
    '默认 524288（512KB），区间 16KB-4MB；仅扫 <head>',
  'Enable screenshots': '启用截图',
  'Capture page screenshots when fetchMode is browser. Only effective in browser mode.':
    'fetchMode 为 browser 时捕获页面截图。仅 browser 模式生效。',
  'Max cached items': '最大缓存条目数',
  'Default 500; range 10-10000': '默认 500，区间 10-10000',
  'Max total storage (bytes)': '最大总存储（字节）',
  'Default 104857600 (100MB); minimum 1MB': '默认 104857600（100MB），下限 1MB',
  'Max size per image (bytes)': '单图最大大小（字节）',
  'Default 524288 (512KB); minimum 1KB': '默认 524288（512KB），下限 1KB',
  'WebP quality': 'WebP 质量',
  'Default 75; range 40-100': '默认 75，区间 40-100',
  'Disable password login': '禁用密码登录',
  'Disables password login, allowing sign-in only via Passkey or OAuth. Do not enable unless those methods are configured.':
    '禁用密码登录，只能通过 Passkey 或 OAuth 登录；如果没有配置这些请不要开启',
  'Provider ID': 'Provider ID',
  'Unique identifier, e.g. "openai-main", "deepseek"':
    '唯一标识符，如 "openai-main", "deepseek"',
  'Display name': '显示名称',
  'Provider type': 'Provider 类型',
  'openai | openai-compatible | anthropic | openrouter':
    'openai | openai-compatible | anthropic | openrouter',
  'Custom endpoint': '自定义 Endpoint',
  'Required for OpenAI-compatible services, e.g. https://api.deepseek.com':
    'OpenAI 兼容服务必填，如 https://api.deepseek.com',
  'Model list URL': '模型列表 URL',
  'Full URL to fetch the model list from (OpenAI format); leave empty to use the built-in registry':
    '用于拉取模型列表的完整 URL（OpenAI 格式）；留空则使用内置注册表',
  'Append /v1 to base URL': '向 base URL 追加 /v1',
  'Append /v1 to the endpoint when missing; defaults to enabled':
    '当 endpoint 缺少 /v1 时自动追加；默认开启',
  'Default model': '默认模型',
  'E.g. gpt-4o, deepseek-chat, claude-sonnet-4-20250514':
    '如 gpt-4o, deepseek-chat, claude-sonnet-4-20250514',
  'Context window (tokens)': '上下文窗口（tokens）',
  'Max output tokens': '最大输出 tokens',
  'Model override': '模型覆盖',
  "Overrides the provider's default model; leave empty to use the provider default":
    '覆盖 provider 的默认模型，留空使用 provider 默认值',
  'References the id of a provider in `providers`':
    '指向 providers 中某个 provider 的 id',
  'AI providers': 'AI 服务商',
  'Configure multiple AI service providers': '配置多个 AI 服务提供商',
  'Summary model': '摘要功能模型',
  'Writing assistant model': '写作助手模型',
  'Comment review model': '评论审核模型',
  'Allow AI summary': '可调用 AI 摘要',
  'Whether to allow calling AI to generate summaries':
    '是否开启调用 AI 去生成摘要',
  'Auto-generate summary on article creation': '文章创建时自动生成摘要',
  'Requires enableSummary to also be enabled': '需同时启用 enableSummary',
  'Regenerate summary on article update': '文章更新时重新生成摘要',
  'Regenerates only for languages whose source-text hash has changed; requires enableSummary to also be enabled':
    '仅在源文本 hash 变化的语言重新生成；需同时启用 enableSummary',
  'AI summary target languages': 'AI 摘要目标语言列表',
  'Target languages for auto-generated summaries, using [ISO 639-1 language codes](https://www.w3schools.com/tags/ref_language_codes.asp), e.g. ["zh", "en", "ja"]':
    '自动生成摘要的目标语言列表，使用 [ISO 639-1 语言代码](https://www.w3schools.com/tags/ref_language_codes.asp)，如 ["zh", "en", "ja"]',
  'Minimum text length for summary auto-generation': '摘要自动生成最小正文长度',
  'Skips automatic hooks (OnCreate/OnUpdate) when the body has fewer characters than this; only affects automatic triggers. 0 means no limit. Default 100':
    '正文字符数低于此值时跳过自动钩子（OnCreate/OnUpdate），仅影响自动触发；0 表示不限。默认 100',
  'Translation model': '翻译功能模型',
  'Allow AI translation': '可调用 AI 翻译',
  'Whether to allow calling AI to generate translations':
    '是否开启调用 AI 去生成翻译',
  'Auto-generate AI translations': '开启 AI 翻译自动生成',
  'When enabled, translations are auto-generated after an article is published. Requires the option above to also be enabled, otherwise has no effect.':
    '此选项开启后，将会在文章发布后自动生成翻译，需要开启上面的选项，否则无效',
  'AI translation target languages': 'AI 翻译目标语言列表',
  'Target languages for auto-generated translations, using [ISO 639-1 language codes](https://www.w3schools.com/tags/ref_language_codes.asp), e.g. ["en", "ja", "ko"]':
    '自动生成翻译的目标语言列表，使用 [ISO 639-1 语言代码](https://www.w3schools.com/tags/ref_language_codes.asp)，如 ["en", "ja", "ko"]',
  'Per-task translation language concurrency': '单任务翻译语言并发',
  'Parallel languages per Translation task. Default 3, range 1-10.':
    '每个 Translation 任务并行处理的语言数。默认 3，范围 1-10。',
  'Enable translation review': '启用翻译审校',
  'When enabled, translations go through a writer → reviewer → editor pipeline. Reviewer scores native-feel; below threshold triggers a revise pass.':
    '开启后翻译将走 writer → reviewer → editor 流水线。审校对母语感打分，低于阈值时触发改写。',
  'Translation reviewer model': '翻译审校模型',
  'AI model used by the translation reviewer (critique-only). Falls back to the translation model when empty.':
    '翻译审校（仅点评）使用的 AI 模型；留空则回退到翻译模型。',
  'Translation review score threshold': '翻译审校分数阈值',
  'Reviewer score (0-100) at or above which the editor pass is skipped. Default 85.':
    '审校分数（0-100）达到或超过该值时跳过 editor 改写。默认 85。',
  'Insights model': 'Insights 精读模型',
  'AI model used to generate Insights': '用于生成 Insights 精读的 AI 模型',
  'Insights translation model': 'Insights 翻译模型',
  'AI model used to translate Insights; falls back to the translation model when empty':
    '用于翻译 Insights 的 AI 模型，留空则复用翻译模型',
  'Allow AI Insights': '可调用 AI Insights',
  'Master switch': '总开关',
  'Auto-generate Insights on article creation': '文章创建时自动生成 Insights',
  'Requires enableInsights to also be enabled': '需同时启用 enableInsights',
  'Regenerate Insights on article update': '文章更新时重新生成 Insights',
  'Triggers only when the source-text hash changes':
    '仅在源文本 hash 变化时触发',
  'Auto-translate Insights after generation': 'Insights 生成后自动翻译',
  'Dispatches translation tasks based on insightsTargetLanguages':
    '按 insightsTargetLanguages 派发翻译任务',
  'Insights target languages': 'Insights 目标语言列表',
  'ISO 639-1 list; the source language is automatically excluded':
    'ISO 639-1 列表；源语言自动排除',
  'Minimum text length for Insights auto-generation':
    'Insights 自动生成最小正文长度',
  'Skips automatic hooks (OnCreate/OnUpdate) when the body has fewer characters than this; only affects automatic triggers. 0 means no limit. Default 300':
    '正文字符数低于此值时跳过自动钩子（OnCreate/OnUpdate），仅影响自动触发；0 表示不限。默认 300',
}
