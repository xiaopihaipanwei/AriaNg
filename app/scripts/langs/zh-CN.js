(function () {
    'use strict';

    angular.module('ariaNg').config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('zh-CN', {
            'Simplified Chinese': '简体中文',
            'Error': '错误',
            'OK': '确定',
            'Cancel': '取消',
            'True': '是',
            'true': '是',
            'False': '否',
            'false': '否',
            'New': '新建',
            'Start': '开始下载任务',
            'Pause': '暂停下载任务',
            'Delete': '删除下载任务',
            'Display Order': '显示顺序',
            'Default': '默认',
            'By File Name': '按文件名',
            'By File Size': '按文件大小',
            'By Completed Percent': '按进度',
            'By Remain Time': '按剩余时间',
            'By Download Speed': '按下载速度',
            'Download': '下载',
            'Upload': '上传',
            'Downloading': '正在下载',
            'Seeding': '正在做种',
            'Waiting': '正在等待',
            'Paused': '已暂停',
            'Completed': '已完成',
            'Error Occurred': '发生错误',
            'Removed': '已删除',
            'Downloaded / Stopped': '已完成 / 已停止',
            'Settings': '系统设置',
            'AriaNg Settings': 'AriaNg 设置',
            'Aria2 Settings': 'Aria2 设置',
            'Basic Settings': '基本设置',
            'HTTP/FTP/SFTP Settings': 'HTTP/FTP/SFTP 设置',
            'HTTP Settings': 'HTTP 设置',
            'FTP/SFTP Settings': 'FTP/SFTP 设置',
            'BitTorrent/MegaLink Settings': 'BitTorrent/磁链设置',
            'BitTorrent Settings': 'BitTorrent 设置',
            'MegaLink Settings': '磁链设置',
            'RPC Settings': 'RPC 设置',
            'Advanced Settings': '高级设置',
            'Aria2 Status': 'Aria2 状态',
            'File Name': '文件名',
            'File Size': '大小',
            'Completed Percent': '进度',
            'Remain Time': '剩余时间',
            'Download Speed': '下载速度',
            'Upload Speed': '上传速度',
            'Files': '个文件',
            'Overview': '总览',
            'Blocks': '区块信息',
            'File List': '文件列表',
            'Peers': '连接状态',
            'Task Status': '任务状态',
            'Error Description': '错误描述',
            'Health Percent': '健康度',
            'Info Hash': '特征值',
            'Seeders': '种子数',
            'Connections': '连接数',
            'Download Dir': '下载路径',
            'Address': '地址',
            'Status': '状态',
            'Percent': '完成度',
            'Download / Upload Speed': '下载 / 上传速度',
            'No connected peers': '没有连接到其他节点',
            'Language': '语言',
            'Aria2 RPC Host': 'Aria2 RPC 主机',
            'Aria2 RPC Port': 'Aria2 RPC 端口',
            'Aria2 RPC Protocol': 'Aria2 RPC 协议',
            'Global Stat Refresh Interval': '全局状态刷新间隔',
            'Download Task Refresh Interval': '下载任务刷新间隔',
            'Aria2 Version': 'Aria2 版本',
            'Enabled Features': '已启用的功能',
            'Toggle Navigation': '切换导航',
            'Loading': '正在加载...',
            'More Than One Day': '超过1天',
            'Unknown': '未知',
            'Bytes': '字节',
            'Minutes': '分',
            'Seconds': '秒',
            'Milliseconds': '毫秒',
            '(0 is disabled)': '(0为禁用)',
            'Changes to the settings take effect after refreshing page.': '设置将在页面刷新后生效.',
            'Download Path': '下载路径',
            'The directory to store the downloaded file.': '',
            'Input File': '输入文件',
            'The input file can contain a list of URIs for aria2 to download.': '',
            'Log File': '日志文件',
            'The file name of the log file. If - is specified, log is written to stdout. If empty string("") is specified, or this option is omitted, no log is written to disk at all.': '日志文件的路径. 如果设置为 "-", 日志则写入到 stdout. 如果设置为空字符串(""), 日志将不会记录到磁盘上.',
            'Max Concurrent Downloads': '最大同时下载数',
            'Set the maximum number of parallel downloads for every queue item.': '',
            'Check Integrity': '检查完整性',
            'Check file integrity by validating piece hashes or a hash of entire file. This option has effect only in BitTorrent, Metalink downloads with checksums or HTTP(S)/FTP downloads with --checksum option.' : '通过对文件的每个分块或整个文件进行哈希验证来检查文件的完整性. 此选项仅对于BT、磁力链接及设置了 --checksum 选项的 HTTP(S)/FTP 链接.',
            'Resume Download': '断点续传',
            'Continue downloading a partially downloaded file. Use this option to resume a download started by a web browser or another program which downloads files sequentially from the beginning. Currently this option is only applicable to HTTP(S)/FTP downloads.': '继续下载部分完成的文件. 启用此选项可以继续下载从浏览器或其他程序按顺序下载的文件. 此选项目前只支持 HTTP(S)/FTP 下载的文件.',
            'Enable JSON-RPC/XML-RPC Server': '启用 JSON-RPC/XML-RPC 服务器',
            'Enable JSON-RPC/XML-RPC server.': '',
            'Pause After Metadata Downloaded': '元数据下载完后暂停',
            'Pause downloads created as a result of metadata download. There are 3 types of metadata downloads in aria2: (1) downloading .torrent file. (2) downloading torrent metadata using magnet link. (3) downloading metalink file. These metadata downloads will generate downloads using their metadata. This option pauses these subsequent downloads. This option is effective only when --enable-rpc=true is given.': '当元数据下载完成后暂停后续的下载. 在 aria2 中有三种类型的元数据下载: (1) 下载 .torrent 文件. (2) 通过磁链下载种子元数据. (3) 下载磁链文件. 这些元数据下载完后会根据元数据内容进行下载. 这个选项会暂停这些后续的下载. 此选项仅当 --enable-rpc 启用时生效.',
            'Allow All Origin Request': '接受所有远程请求',
            'Add Access-Control-Allow-Origin header field with value * to the RPC response.': '在 RPC 响应头增加 Access-Control-Allow-Origin 字段, 值为 * .',
            'Listen on All Network Interfaces': '在所有网卡上监听',
            'Listen incoming JSON-RPC/XML-RPC requests on all network interfaces. If false is given, listen only on local loopback interface.': '在所有网络适配器上监听 JSON-RPC/XML-RPC 的请求, 如果设置为否, 仅监听本地网络的请求.',
            'Listen Port': '监听端口',
            'Specify a port number for JSON-RPC/XML-RPC server to listen to.': '',
            'Max Request Size': '最大请求大小',
            'Set max size of JSON-RPC/XML-RPC request. If aria2 detects the request is more than SIZE bytes, it drops connection.': '设置 JSON-RPC/XML-RPC 最大的请求大小. 如果 aria2 检测到请求超过设定的字节数, 会直接取消连接.',
            'Save Upload Metadata': '保存上传的元数据',
            'Save the uploaded torrent or metalink meta data in the directory specified by --dir option. The file name consists of SHA-1 hash hex string of meta data plus extension. For torrent, the extension is \'.torrent\'. For metalink, it is \'.meta4\'. If false is given to this option, the downloads added by aria2.addTorrent() or aria2.addMetalink() will not be saved by --save-session option.': '在 dir 参数设置的目录中保存上传的种子文件或磁链的元数据. 文件名包括 SHA-1 哈希后的元数据和扩展名两部分. 对于种子文件, 扩展名为 \'.torrent\'. 对于磁链为 \'.meta4\'. 如果此选项设置为否, 通过 aria2.addTorrent() 或 aria2.addMetalink() 方法添加的下载将无法通过 --save-session 选项保存.',
            'Enable SSL/TLS': '启用 SSL/TLS',
            'RPC transport will be encrypted by SSL/TLS. The RPC clients must use https scheme to access the server. For WebSocket client, use wss scheme. Use --rpc-certificate and --rpc-private-key options to specify the server certificate and private key.': 'RPC 将通过 SSL/TLS 加密传输. RPC 客户端需要使用 https 协议连接服务器. 对于 WebSocket 客户端, 使用 wss 协议. 使用 --rpc-certificate 和 --rpc-private-key 选项设置服务器的证书和私钥.',
            'Type is illegal!': '类型错误!',
            'none': '无',
            'http': 'Http',
            'https': 'Https',
            'ftp': 'Ftp',
            'mem': '仅内存',
            'plain': '明文',
            'arc4': 'ARC4',
            'binary': '二进制',
            'ascii': 'ASCII',
            'debug': '调试 (Debug)',
            'info': '普通 (Info)',
            'notice': '一般 (Notice)',
            'warn': '警告 (Warn)',
            'error': '错误 (Error)'
        });
    }])
})();
