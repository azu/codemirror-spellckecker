/**
 * Created by azu on 2014/10/11.
 * LICENSE : MIT
 */
"use strict";
// dictionary is https://github.com/azu/wzeditor-word-rules-parser
// use WEB+DB PRESS用語統一ルール
var dictionaryItems = [
    {
        pattern: 'クッキー|\\bCOOKIE\\b|\\bcookie\\b',
        expected: 'Cookie'
    },
    {pattern: 'Web Socket', expected: 'WebSocket'},
    {
        pattern: '(?:([^/])ウェブ)|(?:ウェブ([^/\\+]))',
        expected: '$1Web$2'
    },
    {
        pattern: '(?:([^/])\\bWEB)|(?:WEB\\b([^/\\+]))',
        expected: '$1Web$2'
    },
    {
        pattern: '(?:([^/])ウェッブ)|(?:ウェッブ([^/\\+]))',
        expected: '$1Web$2'
    },
    {pattern: 'ORマッ|O-Rマッ', expected: 'O/Rマッ'},
    {pattern: 'O\\/Rマッパー|\\bORM\\b', expected: 'O/Rマッパ'},
    {pattern: 'アィディア|アイディア|アィディア|アィデア', expected: 'アイデア'},
    {pattern: 'アステリスク', expected: 'アスタリスク'},
    {pattern: 'アーキテクチャー|アーキティクチャ', expected: 'アーキテクチャ'},
    {pattern: '\\bActivity\\b|アクティビティー', expected: 'アクティビティ'},
    {pattern: 'アダプター', expected: 'アダプタ'},
    {pattern: 'アノーテーション', expected: 'アノテーション'},
    {pattern: '\\bApplet\\b', expected: 'アプレット'},
    {pattern: 'アプリ([^ケ])', expected: 'アプリケーション$1'},
    {pattern: 'アニメーター', expected: 'アニメータ'},
    {pattern: 'アンダーバー', expected: 'アンダースコア'},
    {pattern: 'インストーラー', expected: 'インストーラ'},
    {pattern: 'インスパイヤ', expected: 'インスパイア'},
    {
        pattern: 'インタフェイス|インターフェイス|インターフェース|インターフェィス',
        expected: 'インタフェース'
    },
    {pattern: 'インタープリタ|インタプリター|インタープリター', expected: 'インタプリタ'},
    {pattern: 'インデクス', expected: 'インデックス'},
    {pattern: '\\bIntent\\b', expected: 'インテント'},
    {pattern: '\\bWidget\\b|\\bwidget\\b', expected: 'ウィジェット'},
    {pattern: 'ウイルス', expected: 'ウィルス'},
    {pattern: 'ウインドウ', expected: 'ウィンドウ'},
    {pattern: 'ウエア', expected: 'ウェア'},
    {pattern: 'エディター', expected: 'エディタ'},
    {pattern: 'エミッター', expected: 'エミッタ'},
    {pattern: 'エンコーダー', expected: 'エンコーダ'},
    {pattern: 'デコーダー', expected: 'デコーダ'},
    {pattern: 'エミュレーター', expected: 'エミュレータ'},
    {
        pattern: '\\bEntity\\b|\\bentity\\b|エンティティー',
        expected: 'エンティティ'
    },
    {pattern: 'エントリー', expected: 'エントリ'},
    {pattern: 'オブション', expected: 'オプション'},
    {pattern: 'カウンター', expected: 'カウンタ'},
    {
        pattern: 'ガベージ・|ガーベジ|ガーベジ・|ガーベージ|ガーベージ・|ガーベッジ|ガーベッジ・',
        expected: 'ガベージ'
    },
    {pattern: 'カテゴリー', expected: 'カテゴリ'},
    {pattern: 'キャラクター', expected: 'キャラクタ'},
    {
        pattern: '(?:([^a-zA-Z\\-])\\bcache)|(?:cache\\b([^a-zA-Z\\-]))',
        expected: '$1キャッシュ$2'
    },
    {
        pattern: '(?:([^a-zA-Z\\-])\\bCache)|(?:Cache\\b([^a-zA-Z\\-]))',
        expected: '$1キャッシュ$2'
    },
    {
        pattern: '\\bQueryString\\b|Query String|クエリストリング|クエリーストリング',
        expected: 'クエリ文字列'
    },
    {pattern: 'クエリー', expected: 'クエリ'},
    {
        pattern: 'クライアント\\/サーバ|クライアント\\/サーバー|クライアント・サーバ|クライアント・サーバー|クライアントサーバ|クライアントサーバー',
        expected: 'クライアント／サーバ'
    },
    {pattern: 'クラスター', expected: 'クラスタ'},
    {pattern: 'グランド', expected: 'グラウンド'},
    {pattern: '\\bGrid\\b', expected: 'グリッド'},
    {pattern: 'クロージャー', expected: 'クロージャ'},
    {pattern: 'クローラー', expected: 'クローラ'},
    {pattern: 'ゲッター', expected: 'ゲッタ'},
    {pattern: 'コピー＆ペースト|コピペ|コピーアンドペースト', expected: 'コピー&ペースト'},
    {pattern: 'コミッター', expected: 'コミッタ'},
    {pattern: 'コミニュ', expected: 'コミュニ'},
    {pattern: 'コンストラクター', expected: 'コンストラクタ'},
    {pattern: 'コンテクスト', expected: 'コンテキスト'},
    {pattern: 'Content provider', expected: 'コンテントプロバイダ'},
    {pattern: 'コンテナー', expected: 'コンテナ'},
    {pattern: 'コンピューター', expected: 'コンピュータ'},
    {pattern: 'コントローラー', expected: 'コントローラ'},
    {pattern: 'サーバー', expected: 'サーバ'},
    {pattern: '\\bServlet\\b|\\bSERVLET\\b', expected: 'サーブレット'},
    {
        pattern: 'サーブレット／JSP|サーブレット＆JSP|サーブレット&JSP',
        expected: 'サーブレット/JSP'
    },
    {pattern: 'ジェネレーター', expected: 'ジェネレータ'},
    {pattern: 'ジェネレイティブ', expected: 'ジェネレーティブ'},
    {pattern: 'ジョブス', expected: 'ジョブズ'},
    {pattern: '\\bGeotag\\b|\\bgeotag\\b', expected: 'ジオタグ'},
    {pattern: 'シュミレー', expected: 'シミュレー'},
    {pattern: 'スカラー', expected: 'スカラ'},
    {pattern: 'スタンドアロン', expected: 'スタンドアローン'},
    {pattern: 'ストアード', expected: 'ストアド'},
    {pattern: 'ストレッジ|ストレジ', expected: 'ストレージ'},
    {pattern: 'セキュリティー', expected: 'セキュリティ'},
    {pattern: '\\bsession\\b|\\bSession\\b', expected: 'セッション'},
    {pattern: 'セッター', expected: 'セッタ'},
    {pattern: 'セレクター', expected: 'セレクタ'},
    {pattern: '([^経])ソフトウエア', expected: '$1ソフトウェア'},
    {pattern: 'ダイヤグラム', expected: 'ダイアグラム'},
    {
        pattern: '\\btimestamp\\b|\\bTimestamp\\b',
        expected: 'タイムスタンプ'
    },
    {pattern: '\\btweet\\b|\\bTweet\\b|ツィート', expected: 'ツイート'},
    {pattern: 'ツリー・オブジェクト', expected: 'ツリーオブジェクト'},
    {pattern: 'ツリー・エントリ', expected: 'ツリーエントリ'},
    {
        pattern: '(?:([^◆])\\btable)|(?:table\\b([^◆]))',
        expected: '$1テーブル$2'
    },
    {
        pattern: '(?:([^◆])\\bTable)|(?:Table\\b([^◆]))',
        expected: '$1テーブル$2'
    },
    {pattern: 'ディレクタ', expected: 'ディレクター'},
    {pattern: 'Data Services', expected: 'データサービス'},
    {pattern: 'Data Sync', expected: 'データ同期'},
    {pattern: 'チェーン', expected: 'チェイン'},
    {pattern: '\\bDisk\\b', expected: 'ディスク'},
    {pattern: 'ディスパッチャー', expected: 'ディスパッチャ'},
    {pattern: 'ディスプレー', expected: 'ディスプレイ'},
    {pattern: 'ディレクトリー', expected: 'ディレクトリ'},
    {pattern: 'テクノロジー', expected: 'テクノロジ'},
    {pattern: 'デザイナー', expected: 'デザイナ'},
    {pattern: 'デバック', expected: 'デバッグ'},
    {pattern: '既定|ディフォルト|デフォールト', expected: 'デフォルト'},
    {pattern: 'デプロイメント', expected: 'デプロイ'},
    {pattern: 'ディベロッパー|ディベロッパ|デベロッパー|ディヴェロッパ', expected: 'デベロッパ'},
    {pattern: 'デリバリー', expected: 'デリバリ'},
    {pattern: 'ドキュメンテーション', expected: 'ドキュメント'},
    {pattern: 'ドライバー', expected: 'ドライバ'},
    {
        pattern: 'ドラッグ・アンド・ドロップ|ドラッグアンドドロップ|ドラッグ＆ドロップ',
        expected: 'ドラッグ&ドロップ'
    },
    {pattern: 'ハイパー・リンク', expected: 'ハイパーリンク'},
    {pattern: 'パーサー|パーザー|パーザ', expected: 'パーサ'},
    {
        pattern: '\\bPermalink\\b|\\bpermalink\\b|permanent link|パーマネントリンク',
        expected: 'パーマリンク'
    },
    {pattern: 'バッファー', expected: 'バッファ'},
    {pattern: '\\bpath\\b|\\bPath\\b', expected: 'パス'},
    {pattern: 'パタン', expected: 'パターン'},
    {pattern: '\\bhash\\b|\\bHash\\b', expected: 'ハッシュ'},
    {pattern: '薔薇', expected: 'バラ'},
    {pattern: 'バラエティー', expected: 'バラエティ'},
    {pattern: 'パラメタ|パラメーター', expected: 'パラメータ'},
    {pattern: 'バランサー', expected: 'バランサ'},
    {pattern: 'ハンドラー', expected: 'ハンドラ'},
    {pattern: 'hit率', expected: 'ヒット率'},
    {pattern: 'ファイラー', expected: 'ファイラ'},
    {pattern: 'ファクトリー', expected: 'ファクトリ'},
    {pattern: 'フィーチャフォン', expected: 'フィーチャーフォン'},
    {pattern: 'Webブラウザー?|WEBブラウザー?', expected: 'ブラウザ'},
    {pattern: 'ブラウザー', expected: 'ブラウザ'},
    {pattern: 'プライマリー', expected: 'プライマリ'},
    {pattern: 'プラットホーム', expected: 'プラットフォーム'},
    {pattern: 'プレフィクス|プリフィックス', expected: 'プレフィックス'},
    {pattern: 'プレーヤ', expected: 'プレイヤー'},
    {pattern: 'プレーヤー', expected: 'プレーヤ'},
    {pattern: 'ブレイク', expected: 'ブレーク'},
    {pattern: 'プレイン([^グ])', expected: 'プレーン$1'},
    {pattern: 'プロパティー', expected: 'プロパティ'},
    {pattern: 'ヘヴィ', expected: 'ヘビー'},
    {
        pattern: 'レビュアー|レビュワー|レビュワ|レビューアー|レビューア|レビューワー|レビューワ',
        expected: 'レビュア'
    },
    {pattern: 'ビューアー|ビューワー|ビューワ', expected: 'ビューア'},
    {
        pattern: 'ファイアーウォール|ファイヤーウォール|ファイヤウォール|ファイヤーウオール',
        expected: 'ファイアウォール'
    },
    {pattern: 'フィルター', expected: 'フィルタ'},
    {pattern: 'フィクスチャー', expected: 'フィクスチャ'},
    {pattern: 'フェイルオーバ|フェールオーバー|フェールオーバ', expected: 'フェイルオーバー'},
    {pattern: 'フェイズ', expected: 'フェーズ'},
    {pattern: 'フッター|フッダ', expected: 'フッタ'},
    {
        pattern: 'プロクシ|プロクシー|プロキシー|\\bProxy\\b|\\bproxy\\b',
        expected: 'プロキシ'
    },
    {
        pattern: '(?:([^/])\\bblog)|(?:blog\\b([^/]))',
        expected: '$1ブログ$2'
    },
    {
        pattern: '(?:([^/])\\bBlog)|(?:Blog\\b([^/]))',
        expected: '$1ブログ$2'
    },
    {pattern: 'プログラマー', expected: 'プログラマ'},
    {pattern: 'プロシージャー', expected: 'プロシージャ'},
    {pattern: 'Broadcast receiver', expected: 'ブロードキャストレシーバ'},
    {pattern: 'プロバイダー', expected: 'プロバイダ'},
    {pattern: 'ベンダ', expected: 'ベンダー'},
    {pattern: 'ヘッダー|ヘッタ|ヘッター', expected: 'ヘッダ'},
    {pattern: 'ベクター', expected: 'ベクタ'},
    {pattern: 'ページャー', expected: 'ページャ'},
    {pattern: 'ポインター', expected: 'ポインタ'},
    {pattern: 'ポリモルフィズム|ポリモーフィズム|ポルモルフィズム', expected: 'ポリモフィズム'},
    {pattern: 'マトリクス', expected: 'マトリックス'},
    {pattern: 'マッピングツール|マッパー', expected: 'マッパ'},
    {pattern: 'マネージメント', expected: 'マネジメント'},
    {pattern: 'メーカ', expected: 'メーカー'},
    {pattern: '\\bML\\b', expected: 'メーリングリスト'},
    {pattern: 'メタファー', expected: 'メタファ'},
    {pattern: 'メモリー', expected: 'メモリ'},
    {pattern: 'メインテナンス', expected: 'メンテナンス'},
    {pattern: 'メンテナー', expected: 'メンテナ'},
    {pattern: 'メンバ([^ー])', expected: 'メンバー$1'},
    {pattern: 'リーダ([^ー])', expected: 'リーダー$1'},
    {pattern: 'リジューム', expected: 'レジューム'},
    {pattern: '\\bmodule\\b|\\bModule\\b', expected: 'モジュール'},
    {pattern: 'ユーザー', expected: 'ユーザ'},
    {pattern: 'ユーティリティー', expected: 'ユーティリティ'},
    {pattern: 'Unitテスト|単体テスト', expected: 'ユニットテスト'},
    {pattern: 'ライブラリー', expected: 'ライブラリ'},
    {pattern: 'ラッパー', expected: 'ラッパ'},
    {pattern: 'デグレード|デグレ', expected: 'リグレッション'},
    {pattern: 'リスナー', expected: 'リスナ'},
    {pattern: 'Reverse Proxy', expected: 'リバースプロキシ'},
    {pattern: 'リファラー', expected: 'リファラ'},
    {pattern: 'リポジトリー|レポジトリ|レポジトリー', expected: 'リポジトリ'},
    {pattern: 'ルーター', expected: 'ルータ'},
    {pattern: '([^プ])レイヤー', expected: '$1レイヤ'},
    {pattern: 'レジストリー', expected: 'レジストリ'},
    {pattern: 'レイテンシー', expected: 'レイテンシ'},
    {pattern: 'ローダー', expected: 'ローダ'},
    {pattern: 'ワーカー|\\bworker\\b', expected: 'ワーカ'},
    {pattern: 'Onetime URL', expected: 'ワンタイムURL'},
    {pattern: 'Quad Core CPU', expected: 'クアッドコアCPU'},
    {
        pattern: 'クァッドコア|Quad Core|クァッドCore|Quadコア',
        expected: 'クアッドコア'
    },
    {pattern: 'Dual Core CPU', expected: 'デュアルコアCPU'},
    {pattern: 'Dual Core|デュアルCore|Dualコア', expected: 'デュアルコア'},
    {
        pattern: 'マスター([^.])|\\bMaster\\b([^.])|\\bmaster\\b([^.])',
        expected: 'マスタ$1'
    },
    {pattern: 'マスタ・スレーブ', expected: 'マスタ／スレーブ'},
    {pattern: '\\bBackup\\b([^.])', expected: 'バックアップ$1'},
    {pattern: 'スレイブ([^.])|\\bSlave\\b([^.])', expected: 'スレーブ$1'},
    {pattern: 'ディスクリプタ', expected: '記述子'},
    {pattern: 'アトリビュート', expected: '属性'},
    {pattern: 'エレメント', expected: '要素'},
    {pattern: 'Action Controller', expected: 'ActionController'},
    {pattern: 'Action Mailer', expected: 'ActionMailer'},
    {pattern: 'Action Pack', expected: 'ActionPack'},
    {
        pattern: 'Action Script|アクションスクリプト',
        expected: 'ActionScript'
    },
    {pattern: 'ActionScript([0-9])', expected: 'ActionScript $1'},
    {
        pattern: '\\bActionScriptVirtualMachine\\b|ActionScript VirtualMachine',
        expected: 'ActionScript Virtual Machine'
    },
    {pattern: 'Action View', expected: 'ActionView'},
    {pattern: 'Active Model', expected: 'ActiveModel'},
    {pattern: 'Active Record', expected: 'ActiveRecord'},
    {pattern: 'Active Resource', expected: 'ActiveResource'},
    {pattern: 'Active Support', expected: 'ActiveSupport'},
    {
        pattern: '\\bapache\\b|\\bApatch\\b|\\bapatch\\b',
        expected: 'Apache'
    },
    {
        pattern: 'Apache([0-9])|Apatch([0-9])',
        expected: 'Apache $1$2'
    },
    {pattern: 'ASP \\.NET', expected: 'ASP.NET'},
    {pattern: 'ビーン', expected: 'Bean'},
    {
        pattern: '\\bBigTable\\b|Big Table|Big table',
        expected: 'Bigtable'
    },
    {pattern: '\\bCakePHP\\b', flag: 'i', expected: 'CakePHP'},
    {pattern: 'CakePHP([0-9])', expected: 'CakePHP $1'},
    {pattern: '\\bCapistorano\\b', expected: 'Capistrano'},
    {
        pattern: 'Chromeウェブストア|Chrome Webストア',
        expected: 'Chrome Web Store'
    },
    {pattern: '\\bCygwin\\b', flag: 'i', expected: 'Cygwin'},
    {pattern: '\\bDBFlute\\b', flag: 'i', expected: 'DBFlute'},
    {
        pattern: '\\bDebian\\b|Debian\\/GNU Linux',
        expected: 'Debian GNU/Linux'
    },
    {
        pattern: '(?:([^/.])ディー・エヌ・エー)|(?:ディー・エヌ・エー([^/.]))',
        expected: '$1DeNA$2'
    },
    {
        pattern: '(?:([^/.])ディーエヌエー)|(?:ディーエヌエー([^/.]))',
        expected: '$1DeNA$2'
    },
    {
        pattern: '(?:([^/.])\\bDENA)|(?:DENA\\b([^/.]))',
        expected: '$1DeNA$2'
    },
    {pattern: '\\bDreamWeaver\\b', expected: 'Dreamweaver'},
    {
        pattern: '\\beasy_install\\b',
        flag: 'i',
        expected: 'easy_install'
    },
    {pattern: '\\bEclipse\\b', flag: 'i', expected: 'Eclipse'},
    {pattern: 'ECMA Script', expected: 'ECMAScript'},
    {
        pattern: '\\bEJB-JARファイル\\b',
        flag: 'i',
        expected: 'EJB-JARファイル'
    },
    {pattern: '\\bElisp\\b', flag: 'i', expected: 'Elisp'},
    {pattern: '\\bLisp\\b', flag: 'i', expected: 'Lisp'},
    {pattern: '\\bEmacs\\b', flag: 'i', expected: 'Emacs'},
    {pattern: 'Emacs([0-9])', expected: 'Emacs $1'},
    {
        pattern: '\\bEmacs Lisp\\b',
        flag: 'i',
        expected: 'Emacs Lisp'
    },
    {
        pattern: '\\bEventMachine\\b',
        flag: 'i',
        expected: 'EventMachine'
    },
    {pattern: 'エクセル', expected: 'Excel'},
    {pattern: '\\bexpress\\b', flag: 'i', expected: 'express'},
    {
        pattern: '(?:([^/.])\\bfacebook)|(?:facebook\\b([^/.]))',
        expected: '$1Facebook$2'
    },
    {pattern: '\\bFirebug\\b', flag: 'i', expected: 'Firebug'},
    {
        pattern: '\\bFireFox\\b|Fire Fox|ファイアーフォックス|ファイヤーフォックス',
        expected: 'Firefox'
    },
    {pattern: 'フラッシュ', expected: 'Flash'},
    {pattern: '\\bFlashLite\\b', expected: 'Flash Lite'},
    {
        pattern: 'Flashプレイヤー|Flash プレイヤー|Flashプレーヤ|Flash プレーヤ|Flashプレーヤー|Flash プレーヤー|\\bFlashPlayer\\b',
        expected: 'Flash Player'
    },
    {pattern: 'Flash Platform', expected: 'Flashプラットフォーム'},
    {pattern: '\\bFlexBuilder\\b', expected: 'Flex Builder'},
    {pattern: '\\bGoogleGears\\b|Google Gears', expected: 'Gears'},
    {pattern: '\\bGHCi\\b', flag: 'i', expected: 'GHCi'},
    {pattern: '\\bGit\\b', flag: 'i', expected: 'Git'},
    {pattern: '([^/\\.])\\bgithub\\b', expected: '$1GitHub'},
    {pattern: '\\bGmail\\b', flag: 'i', expected: 'Gmail'},
    {pattern: 'Googleガジェット', expected: 'Google Gadget'},
    {
        pattern: 'Google Map|\\bGoogleMaps\\b|\\bGoogleMap\\b|Googleマップ',
        expected: 'Google Maps'
    },
    {
        pattern: '\\bGreaseMonkey\\b|Grease monkey|Grease Monkey',
        expected: 'Greasemonkey'
    },
    {pattern: '\\bgzip\\b', flag: 'i', expected: 'gzip'},
    {pattern: '\\bHeartbeat\\b', flag: 'i', expected: 'Heartbeat'},
    {pattern: 'HTML 5', expected: 'HTML5'},
    {pattern: 'HTML([0-4])', expected: 'HTML $1'},
    {pattern: 'HTTP([0-9])', expected: 'HTTP $1'},
    {pattern: '\\bIO\\b', expected: 'I/O'},
    {
        pattern: '\\bImageMagick\\b',
        flag: 'i',
        expected: 'ImageMagick'
    },
    {
        pattern: 'Internet Explorer([0-9])|IE([0-9])',
        expected: 'Internet Explorer $1$2'
    },
    {pattern: '\\bIE\\b', expected: 'Internet Explorer'},
    {pattern: 'iノード', expected: 'inode'},
    {pattern: '\\biOS SDK\\b', flag: 'i', expected: 'iOS SDK'},
    {pattern: 'ISO-', expected: 'ISO'},
    {pattern: 'ISO([0-9])', expected: 'ISO $1'},
    {pattern: '\\biPad\\b', flag: 'i', expected: 'iPad'},
    {pattern: '\\biPhone\\b', flag: 'i', expected: 'iPhone'},
    {pattern: '\\bJade\\b', flag: 'i', expected: 'Jade'},
    {pattern: '\\bJARファイル\\b', flag: 'i', expected: 'JARファイル'},
    {pattern: 'Java([0-9])', expected: 'Java $1'},
    {pattern: 'Java3D', expected: 'Java 3D'},
    {pattern: '\\bJavaEE\\b', expected: 'Java EE'},
    {pattern: 'JavaEE([0-9])', expected: 'Java EE $1'},
    {pattern: 'Java EE([0-9])', expected: 'Java EE $1'},
    {pattern: '\\bJavaSE\\b', expected: 'Java SE'},
    {pattern: 'JavaSE([0-9])', expected: 'Java SE $1'},
    {pattern: 'Java SE([0-9])', expected: 'Java SE $1'},
    {
        pattern: '\\bJavaBean\\b|Java Bean|Java Beans',
        expected: 'JavaBeans'
    },
    {pattern: '\\bJavadoc\\b', flag: 'i', expected: 'Javadoc'},
    {
        pattern: 'Java Script|\\bJavascript\\b|\\bjavascript\\b',
        expected: 'JavaScript'
    },
    {pattern: 'JavaScript([0-9])', expected: 'JavaScript $1'},
    {pattern: 'Java Server Faces', expected: 'JavaServer Faces'},
    {pattern: 'Java Server Pages', expected: 'JavaServer Pages'},
    {pattern: '\\bJenkins\\b', flag: 'i', expected: 'Jenkins'},
    {pattern: 'JDK([0-9])', expected: 'JDK $1'},
    {pattern: '\\bJPEG\\b', flag: 'i', expected: 'JPEG'},
    {pattern: 'JSF([0-9])', expected: 'JSF $1'},
    {pattern: 'JSP([0-9])', expected: 'JSP $1'},
    {pattern: 'Java VM|\\bJavaVM\\b', expected: 'JVM'},
    {
        pattern: 'Key-Value|キーバリュー|キー・バリュー|キー／バリュー',
        expected: 'key-value'
    },
    {
        pattern: '\\bKitchenSink\\b',
        flag: 'i',
        expected: 'KitchenSink'
    },
    {pattern: '\\bKyotoCabinet\\b', expected: 'Kyoto Cabinet'},
    {
        pattern: '\\bKyotoTycoon\\b|Tokyo *Tycoon',
        expected: 'Kyoto Tycoon'
    },
    {pattern: 'LL言語', expected: 'LL'},
    {pattern: '\\bMacOS\\b', expected: 'Mac OS'},
    {pattern: '\\bMacOSX\\b', expected: 'Mac OS X'},
    {pattern: 'Mac Book', expected: 'MacBook'},
    {pattern: '\\bMacPorts\\b', flag: 'i', expected: 'MacPorts'},
    {pattern: '\\bMaven\\b', flag: 'i', expected: 'Maven'},
    {pattern: '\\bMeCab\\b', flag: 'i', expected: 'MeCab'},
    {pattern: '\\bmemcached\\b', flag: 'i', expected: 'memcached'},
    {
        pattern: '(?:([^/.])マイクロソフト)|(?:マイクロソフト([^/.]))',
        expected: '$1Microsoft$2'
    },
    {
        pattern: '(?:([^/.])\\bmicrosoft)|(?:microsoft\\b([^/.]))',
        expected: '$1Microsoft$2'
    },
    {pattern: '\\bMigemo\\b', flag: 'i', expected: 'Migemo'},
    {pattern: '\\bmixi\\b', flag: 'i', expected: 'mixi'},
    {pattern: 'Mongo DB', expected: 'MongoDB'},
    {pattern: '\\bMySQL\\b', flag: 'i', expected: 'MySQL'},
    {pattern: 'Nagios([0-9])', expected: 'Nagios $1'},
    {pattern: '\\bnginx\\b', flag: 'i', expected: 'nginx'},
    {pattern: '\\bNode.js\\b', flag: 'i', expected: 'Node.js'},
    {pattern: '\\bOAuth\\b', flag: 'i', expected: 'OAuth'},
    {pattern: '\\bOmniAuth\\b', flag: 'i', expected: 'OmniAuth'},
    {pattern: 'Open GL', expected: 'OpenGL'},
    {pattern: 'オペレーティングシステム', expected: 'OS'},
    {pattern: '\\bpararllel\\b', expected: 'parallel'},
    {pattern: 'パソコン', expected: 'PC'},
    {pattern: 'Pentium IV', expected: 'Pentium 4'},
    {pattern: 'Pentium 2|Pentium2', expected: 'Pentium II'},
    {pattern: 'Pentium 3|Pentium3', expected: 'Pentium III'},
    {pattern: 'Perl([0-9])', expected: 'Perl $1'},
    {pattern: '\\bPerl\\b', flag: 'i', expected: 'Perl'},
    {
        pattern: '\\bPhotoShop\\b|\\bphotoshop\\b|フォトショップ',
        expected: 'Photoshop'
    },
    {pattern: 'PHP([0-9])', expected: 'PHP $1'},
    {pattern: '\\bPHPUnit\\b', flag: 'i', expected: 'PHPUnit'},
    {pattern: '\\bping\\b', flag: 'i', expected: 'ping'},
    {pattern: '\\bpip\\b', flag: 'i', expected: 'pip'},
    {pattern: '\\bpixiv\\b', flag: 'i', expected: 'pixiv'},
    {pattern: '\\bPOPFile\\b', flag: 'i', expected: 'POPFile'},
    {
        pattern: '\\bPostScript\\b',
        flag: 'i',
        expected: 'PostScript'
    },
    {pattern: 'PostgreSQL([0-9])', expected: 'PostgreSQL $1'},
    {pattern: '\\bPython\\b', flag: 'i', expected: 'Python'},
    {pattern: '\\bRADIUS\\b', flag: 'i', expected: 'RADIUS'},
    {pattern: 'Rails([0-9])', expected: 'Rails $1'},
    {pattern: '\\bRake\\b', flag: 'i', expected: 'Rake'},
    {
        pattern: '\\bRedHat\\b|\\bRedhat\\b|\\bredhat\\b|\\bRedHad\\b|\\bRedhad\\b|\\bredhad\\b|レッドハット',
        expected: 'Red Hat'
    },
    {
        pattern: '\\bRedHatLinux\\b|RedHat Linux',
        expected: 'Red Hat Linux'
    },
    {
        pattern: 'Red Hat Linux([0-9])|RedHatLinux([0-9])|RedHat Linux([0-9])',
        expected: 'Red Hat Linux $1'
    },
    {pattern: '\\bRedis\\b', flag: 'i', expected: 'Redis'},
    {pattern: '\\bRELAX NG\\b', flag: 'i', expected: 'RELAX NG'},
    {pattern: 'RFC([0-9])', expected: 'RFC $1'},
    {pattern: 'RPC Services', expected: 'RPCサービス'},
    {pattern: '\\bRuby\\b', flag: 'i', expected: 'Ruby'},
    {pattern: 'Ruby([0-9])', expected: 'Ruby $1'},
    {
        pattern: 'Ruby On Rails|\\bRoR\\b',
        expected: 'Ruby on Rails'
    },
    {pattern: '\\bRubyGems\\b', flag: 'i', expected: 'RubyGems'},
    {pattern: 'Ruby Gems', expected: 'RubyGems'},
    {pattern: 'SAML([0-9])', expected: 'SAML $1'},
    {pattern: '\\bScheme\\b', flag: 'i', expected: 'Scheme'},
    {pattern: 'Servlet([0-9])', expected: 'Servlet $1'},
    {
        pattern: '\\bSilverLight\\b|Silver Light',
        expected: 'Silverlight'
    },
    {
        pattern: '\\bSimpleTest\\b',
        flag: 'i',
        expected: 'SimpleTest'
    },
    {pattern: '\\bSinatra\\b', flag: 'i', expected: 'Sinatra'},
    {pattern: '\\bSkeedCast\\b', flag: 'i', expected: 'SkeedCast'},
    {
        pattern: '(?:([^/.])スモールトーク)|(?:スモールトーク([^/.]))',
        expected: '$1Smalltalk$2'
    },
    {pattern: '\\bSocket.IO\\b', flag: 'i', expected: 'Socket.IO'},
    {
        pattern: '([^/.])\\bsourceforge\\b',
        expected: '$1SourceForge'
    },
    {
        pattern: '\\bSpiderMonkey\\b',
        flag: 'i',
        expected: 'SpiderMonkey'
    },
    {pattern: 'SQL([0-9])', expected: 'SQL $1'},
    {pattern: '\\bSQLite\\b', flag: 'i', expected: 'SQLite'},
    {pattern: '\\bSquid\\b', flag: 'i', expected: 'Squid'},
    {
        pattern: '(?:([^/.])\\bSubVersion)|(?:SubVersion\\b([^/.]))',
        expected: '$1Subversion$2'
    },
    {
        pattern: '(?:([^/.])\\bsubversion)|(?:subversion\\b([^/.]))',
        expected: '$1Subversion$2'
    },
    {pattern: '\\bSun\\b', flag: 'i', expected: 'Sun'},
    {pattern: 'Sun RPC', expected: 'SunRPC'},
    {pattern: '\\bSUSE\\b', flag: 'i', expected: 'SUSE'},
    {pattern: '\\bSWFファイル\\b', flag: 'i', expected: 'SWFファイル'},
    {pattern: 'Symfony 2', expected: 'Symfony2'},
    {pattern: 'Tomcat([0-9])', expected: 'Tomcat $1'},
    {pattern: '\\bTwitter\\b', flag: 'i', expected: 'Twitter'},
    {pattern: 'ツイッター', expected: 'Twitter'},
    {pattern: '\\bTokyoCabinet\\b', expected: 'Tokyo Cabinet'},
    {
        pattern: '\\bTokyoDystopia\\b|Kyoto *Dystopia',
        expected: 'Tokyo Dystopia'
    },
    {
        pattern: '\\bTokyoPromenade\\b|Kyoto *Promenade',
        expected: 'Tokyo Promenade'
    },
    {
        pattern: '\\bTokyoTyrant\\b|Kyoto *Tyrant',
        expected: 'Tokyo Tyrant'
    },
    {
        pattern: '\\bTriton\\b|\\btriton\\b|\\btritonn\\b',
        expected: 'Tritonn'
    },
    {
        pattern: '\\bubuntu\\b|\\bUbuntsu\\b|\\bubuntsu\\b|Ubuntu Linux',
        expected: 'Ubuntu'
    },
    {pattern: '\\bunicode\\b|ユニコード', expected: 'Unicode'},
    {pattern: '\\bUnix\\b', expected: 'UNIX'},
    {pattern: 'UTF8|UTF 8|utf8', expected: 'UTF-8'},
    {pattern: 'vim([0-9])', expected: 'Vim $1'},
    {pattern: 'vim script', expected: 'Vimスクリプト'},
    {
        pattern: '\\bVisualBasic\\b|\\bVB\\b',
        expected: 'Visual Basic'
    },
    {
        pattern: 'Visual Studio\\.NET',
        expected: 'Visual Studio .NET'
    },
    {pattern: '\\bVMware\\b', flag: 'i', expected: 'VMware'},
    {pattern: '\\bWARファイル\\b', flag: 'i', expected: 'WARファイル'},
    {pattern: '\\bWeb\\b', flag: 'i', expected: 'Web'},
    {
        pattern: '\\bWebAPI\\b|\\bWEBAPI\\b|WEB API',
        expected: 'Web API'
    },
    {pattern: '\\bWebUI\\b', expected: 'Web UI'},
    {pattern: 'Web Logic', expected: 'WebLogic'},
    {pattern: 'Web Sphere', expected: 'WebSphere'},
    {pattern: '\\bWiFi\\b', expected: 'Wi-Fi'},
    {pattern: 'Windows2000', expected: 'Windows 2000'},
    {
        pattern: 'Windows Server 2000',
        expected: 'Windows 2000 Server'
    },
    {pattern: 'Windows3\\.', expected: 'Windows 3.'},
    {pattern: 'Windows7', expected: 'Windows 7'},
    {pattern: 'Windows95', expected: 'Windows 95'},
    {pattern: 'Windows98', expected: 'Windows 98'},
    {
        pattern: '\\bWindowsMe\\b|\\bWindowsME\\b',
        expected: 'Windows Me'
    },
    {pattern: '\\bWindowsNT\\b', expected: 'Windows NT'},
    {
        pattern: 'Windows 2003 Server',
        expected: 'Windows Server 2003'
    },
    {
        pattern: 'Windows 2008 Server',
        expected: 'Windows Server 2008'
    },
    {pattern: '\\bWindowsVista\\b', expected: 'Windows Vista'},
    {pattern: '\\bWindowsXP\\b', expected: 'Windows XP'},
    {pattern: '([^ースォ])ワード', expected: '$1Word'},
    {pattern: '\\bxAuth\\b', flag: 'i', expected: 'xAuth'},
    {pattern: '\\bXcode\\b', flag: 'i', expected: 'Xcode'},
    {
        pattern: '\\bXML Schema\\b',
        flag: 'i',
        expected: 'XML Schema'
    },
    {
        pattern: 'YAHOO\\!([^!.])|\\bYahoo\\b([^!.])|\\bYAHOO\\b([^!.])|ヤフー([^!.])',
        expected: 'Yahoo!$1'
    },
    {
        pattern: '\\bYahooWidget\\b|Yahoo\\!Widget|Yahoo\\! Widget|\\bYahooGadget\\b|Yahoo\\!Gadget|Yahoo\\! Gadget',
        expected: 'Yahoo!ウィジェット'
    },
    {pattern: '\\bYoutube\\b|\\byoutube\\b', expected: 'YouTube'},
    {pattern: '\\bYSlow\\b', flag: 'i', expected: 'YSlow'},
    {pattern: '\\bZIPファイル\\b', flag: 'i', expected: 'ZIPファイル'},
    {
        pattern: 'オライリージャパン([^・])|オライリー([^・])',
        expected: 'オライリー・ジャパン$1'
    },
    {pattern: 'ソフトバンククリエイティブ', expected: 'ソフトバンク クリエイティブ'},
    {pattern: 'ピアソンエデュケーション([^・])', expected: 'ピアソン・エデュケーション$1'},
    {
        pattern: '(?:([^/.])クイックウェブ)|(?:クイックウェブ([^/.]))',
        expected: '$1qwikWeb$2'
    },
    {
        pattern: '(?:([^/.])クイックWeb)|(?:クイックWeb([^/.]))',
        expected: '$1qwikWeb$2'
    },
    {
        pattern: '(?:([^.])C2ウィキ)|(?:C2ウィキ([^.]))',
        expected: '$1C2 Wiki$2'
    },
    {
        pattern: '(?:([^.])サーチウィキ)|(?:サーチウィキ([^.]))',
        expected: '$1SearchWiki$2'
    },
    {
        pattern: '(?:([^.])サーチWiki)|(?:サーチWiki([^.]))',
        expected: '$1SearchWiki$2'
    },
    {
        pattern: '(?:([^.])メディアウィキ)|(?:メディアウィキ([^.]))',
        expected: '$1MediaWiki$2'
    },
    {
        pattern: '(?:([^.])メディアWiki)|(?:メディアWiki([^.]))',
        expected: '$1MediaWiki$2'
    },
    {
        pattern: '(?:([^.])ハイパーパール)|(?:ハイパーパール([^.]))',
        expected: '$1HyperPerl$2'
    },
    {
        pattern: '(?:([^.])ヌーペディア)|(?:ヌーペディア([^.]))',
        expected: '$1Nupedia$2'
    },
    {
        pattern: '(?:([^.])ユースモッドウィキ)|(?:ユースモッドウィキ([^.]))',
        expected: '$1UseModWiki$2'
    },
    {
        pattern: '(?:([^.])ユースモッドWiki)|(?:ユースモッドWiki([^.]))',
        expected: '$1UseModWiki$2'
    },
    {
        pattern: '(?:([^.])ティドリーウィキ)|(?:ティドリーウィキ([^.]))',
        expected: '$1TiddlyWiki$2'
    },
    {
        pattern: '(?:([^.])ティドリーWiki)|(?:ティドリーWiki([^.]))',
        expected: '$1TiddlyWiki$2'
    },
    {
        pattern: '(?:([^.])ミートボールウィキ)|(?:ミートボールウィキ([^.]))',
        expected: '$1MeatballWiki$2'
    },
    {
        pattern: '(?:([^.])ミートボールWiki)|(?:ミートボールWiki([^.]))',
        expected: '$1MeatballWiki$2'
    },
    {
        pattern: '(?:([^/.])ウィキウィキウェブ)|(?:ウィキウィキウェブ([^/.]))',
        expected: '$1WikiWikiWeb$2'
    },
    {
        pattern: '(?:([^/.])ウィキウィキWeb)|(?:ウィキウィキWeb([^/.]))',
        expected: '$1WikiWikiWeb$2'
    },
    {
        pattern: '(?:([^.])ウィキア)|(?:ウィキア([^.]))',
        expected: '$1Wikia$2'
    },
    {
        pattern: '(?:([^.])Wikiア)|(?:Wikiア([^.]))',
        expected: '$1Wikia$2'
    },
    {
        pattern: '(?:([^/.])ウィキメディア)|(?:ウィキメディア([^/.]))',
        expected: '$1Wikimedia$2'
    },
    {
        pattern: '(?:([^/.])Wikiメディア)|(?:Wikiメディア([^/.]))',
        expected: '$1Wikimedia$2'
    },
    {
        pattern: '(?:([^/.])\\bWikiPedia)|(?:WikiPedia\\b([^/.]))',
        expected: '$1Wikipedia$2'
    },
    {
        pattern: '(?:([^/.])ウィキペディア)|(?:ウィキペディア([^/.]))',
        expected: '$1Wikipedia$2'
    },
    {
        pattern: '(?:([^/.])Wikiベース)|(?:Wikiベース([^/.]))',
        expected: '$1WikiBase$2'
    },
    {
        pattern: '(?:([^/.])ウィキベース)|(?:ウィキベース([^/.]))',
        expected: '$1WikiBase$2'
    },
    {
        pattern: '(?:([^/.])\\bwiki)|(?:wiki\\b([^/.]))',
        expected: '$1Wiki$2'
    },
    {
        pattern: '(?:([^/.])ウィキ)|(?:ウィキ([^/.]))',
        expected: '$1Wiki$2'
    },
    {pattern: '\\bModel\\b', expected: 'モデル'},
    {pattern: '\\bView\\b|\\bview\\b', expected: 'ビュー'},
    {pattern: '\\bController\\b|コントローラー', expected: 'コントローラ'},
    {pattern: 'Actionクラス', expected: 'アクションクラス'},
    {
        pattern: '\\bActionListener\\b|Action Listener|\\bActionListener\\b',
        expected: 'アクションリスナ'
    },
    {
        pattern: 'Actionマッピング|Action Mapping',
        expected: 'アクションマッピング'
    },
    {
        pattern: '\\bActionFormBean\\b|\\bActionFormBeans\\b|ActionForm Bean',
        expected: 'アクションフォームBean'
    },
    {
        pattern: 'Action Form|\\bActionForm\\b',
        expected: 'アクションフォーム'
    },
    {
        pattern: '\\bActionServlet\\b|Action Servlet|Actionサーブレット',
        expected: 'アクションサーブレット'
    },
    {pattern: '\\bAction\\b', expected: 'アクション'},
    {pattern: 'Form Bean|フォームビーン', expected: 'フォームBean'},
    {pattern: 'Requestオブジェクト', expected: 'リクエストオブジェクト'},
    {pattern: 'Responseオブジェクト', expected: 'レスポンスオブジェクト'},
    {pattern: 'Sessionオブジェクト', expected: 'セッションオブジェクト'},
    {pattern: 'Remoteインタフェース', expected: 'リモートインタフェース'},
    {pattern: 'Homeインタフェース', expected: 'ホームインタフェース'},
    {pattern: 'Localインタフェース', expected: 'ローカルインタフェース'},
    {pattern: 'Serviceインタフェース', expected: 'サービスインタフェース'},
    {pattern: 'Entity Bean|entity bean', expected: 'エンティティBean'},
    {pattern: 'session bean|Session Bean', expected: 'セッションBean'},
    {pattern: '．', expected: '。'},
    {pattern: '，', expected: '、'},
    {pattern: '%([^0123456789])', expected: '％$1'},
    {
        pattern: '([^0-9a-zA-Z"\\*\\/\\s\\.◆「])\\/([^0-9a-zA-Z"\\*\\/\\s\\.◆」])',
        expected: '$1／$2'
    },
    {pattern: '([ァ-ヶ])・', expected: '$1'},
    {pattern: '(?:([^…])・・・)|(?:・・・([^…]))', expected: '$1……$2'},
    {pattern: '(?:([^…])･･･)|(?:･･･([^…]))', expected: '$1……$2'},
    {pattern: '(?:([^…])…)|(?:…([^…]))', expected: '$1……$2'},
    {pattern: '――|─―|―─', expected: '──'},
    {pattern: '(?:([^―|─])―)|(?:―([^―|─]))', expected: '$1──$2'},
    {pattern: '(?:([^―|─])─)|(?:─([^―|─]))', expected: '$1──$2'},
    {pattern: '(?:([^ps:]):)|(?::([^\\/:]))', expected: '$1：$2'},
    {pattern: 'e\\.g\\.', expected: '例：'},
    {pattern: '！？', expected: '!?'},
    {pattern: '？！', expected: '?!'},
    {pattern: '！！', expected: '!!'},
    {pattern: '？？', expected: '??'},
    {pattern: '\\(\\[\\^a-zA-Z\\!\\\\', expected: '$1！'},
    {pattern: '\\(\\[\\^a-zA-Z\\!\\\\', expected: '$1？'},
    {pattern: '！？([^\\n\\s「」『』（）［］])', expected: '!? $1'},
    {pattern: '\\!\\?([^\\n\\s「」『』（）［］])', expected: '!? $1'},
    {pattern: '？！([^\\n\\s「」『』（）［］])', expected: '?! $1'},
    {pattern: '\\?\\!([^\\n\\s「」『』（）［］])', expected: '?! $1'},
    {pattern: '？？([^\\n\\s「」『』（）［］])', expected: '?? $1'},
    {pattern: '\\?\\?([^\\n\\s「」『』（）［］])', expected: '?? $1'},
    {pattern: '！([^\\n\\s「」『』（）［］])', expected: '！ $1'},
    {pattern: '\\!([^\\n\\s「」『』（）［］])', expected: '！ $1'},
    {pattern: '？', expected: '？'},
    {pattern: '？([^\\n\\s「」『』（）［］★])', expected: '？ $1'},
    {pattern: '\\?([^\\n\\s「」『』（）［］★])', expected: '？ $1'},
    {pattern: '([0-9])x([0-9])', expected: '$1×$2'},
    {pattern: '->', expected: '→'},
    {pattern: '\\(10\\)|10．', expected: '（10）'},
    {pattern: '\\(1\\)|①|1．', expected: '（1）'},
    {pattern: '\\(2\\)|②|2．', expected: '（2）'},
    {pattern: '\\(3\\)|③|3．', expected: '（3）'},
    {pattern: '\\(4\\)|④|4．', expected: '（4）'},
    {pattern: '\\(5\\)|⑤|5．', expected: '（5）'},
    {pattern: '\\(6\\)|⑥|6．', expected: '（6）'},
    {pattern: '\\(7\\)|⑦|7．', expected: '（7）'},
    {pattern: '\\(8\\)|⑧|8．', expected: '（8）'},
    {pattern: '\\(9\\)|⑨|9．', expected: '（9）'},
    {pattern: '\\[10\\]', expected: '［10］'},
    {pattern: '\\[1\\]', expected: '［1］'},
    {pattern: '\\[2\\]', expected: '［2］'},
    {pattern: '\\[3\\]', expected: '［3］'},
    {pattern: '\\[4\\]', expected: '［4］'},
    {pattern: '\\[5\\]', expected: '［5］'},
    {pattern: '\\[6\\]', expected: '［6］'},
    {pattern: '\\[7\\]', expected: '［7］'},
    {pattern: '\\[8\\]', expected: '［8］'},
    {pattern: '\\[9\\]', expected: '［9］'},
    {pattern: 'Ⅳ', expected: 'IV'},
    {pattern: 'ⅳ', expected: 'iv'},
    {pattern: 'Ⅵ', expected: 'VI'},
    {pattern: 'ⅵ', expected: 'vi'},
    {pattern: 'Ⅶ', expected: 'VII'},
    {pattern: 'ⅶ', expected: 'vii'},
    {pattern: 'Ⅷ', expected: 'VIII'},
    {pattern: 'ⅷ', expected: 'viii'},
    {pattern: 'Ⅸ', expected: 'IX'},
    {pattern: 'ⅸ', expected: 'ix'},
    {pattern: '\\(([^\\)]+)\\)', expected: '（$1）'},
    {pattern: '\\(\\)', expected: '( )'},
    {pattern: '\\{\\}', expected: '{ }'},
    {pattern: '\\[\\]', expected: '[ ]'},
    {pattern: '（|（', expected: '（'},
    {pattern: '） | ）', expected: '）'},
    {pattern: '．（|。（', expected: '（'},
    {pattern: '。）', expected: '）。'},
    {pattern: '、）', expected: '）、'},
    {pattern: '）(\\n)', expected: '）。$1'},
    {pattern: '｢', expected: '「'},
    {pattern: '｣', expected: '」'},
    {pattern: '」、「', expected: '」「'},
    {pattern: '。」', expected: '」'},
    {
        pattern: '([\\d十百千万])Mバイト|([\\d十百千万])メガバイト',
        expected: '$1MB'
    },
    {
        pattern: '([\\d十百千万])Gバイト|([\\d十百千万])ギガバイト',
        expected: '$1GB'
    },
    {
        pattern: '([\\d十百千万])Kバイト|([\\d十百千万])キロバイト',
        expected: '$1KB'
    },
    {
        pattern: '([\\d十百千万])Tバイト|([\\d十百千万])テラバイト',
        expected: '$1TB'
    },
    {
        pattern: '([\\d十百千万])Pバイト|([\\d十百千万])ペタバイト',
        expected: '$1PB'
    },
    {
        pattern: '([\\d十百千万])\\bpx\\b|([\\d十百千万])\\bpixel\\b',
        expected: '$1ピクセル'
    },
    {
        pattern: '([\\d十百千万])\\bbit\\b|([\\d十百千万])\\bBit\\b',
        expected: '$1ビット'
    },
    {pattern: '([\\d十百千万])\\bKbps\\b', expected: '$1kbps'},
    {
        pattern: '([\\d十百千万])\\bKHz\\b|([\\d十百千万])\\bKhz\\b|([\\d十百千万])\\bkhz\\b|([\\d十百千万])\\bKHZ\\b|([\\d十百千万])\\bkHZ\\b',
        expected: '$1kHz'
    },
    {
        pattern: '([\\d十百千万])\\bhz\\b|([\\d十百千万])\\bHZ\\b',
        expected: '$1Hz'
    }
];

// register type
registerSpellDictionary("markdown", dictionaryItems);
var editor = CodeMirror.fromTextArea(document.getElementById("js-main-editor"), {
    lineNumbers: true,
    mode: "gfm",
    gutters: ["CodeMirror-lint-markers"],
    lintTypo: true
});
editor.setValue("Java Script is not JavaScript.\n\nウェプアプリはクッキーを発行する。");