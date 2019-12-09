-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-12-09 03:46:19
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `item`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `chname` varchar(30) NOT NULL,
  `enname` varchar(50) NOT NULL,
  `oldprice` varchar(10) NOT NULL,
  `newprice` varchar(10) NOT NULL,
  `data` varchar(20) NOT NULL,
  `discount` varchar(10) NOT NULL,
  `pic` text NOT NULL,
  `details` text NOT NULL,
  `passage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `name`, `chname`, `enname`, `oldprice`, `newprice`, `data`, `discount`, `pic`, `details`, `passage`) VALUES
(0, 'TMR', '终结者：抵抗', 'Terminator: Resistance', '￥250.00', '￥225.00', '11月15日', '-10%', '[{"title":"商品竖","src":"../img/index/PC_game_img_1.jpg"},{"title":"商品横","src":"../img/item/TMR_des.jpg"},{"title":"展示1","src":"../img/item/TMR_img1.jpg"},{"title":"展示2","src":"../img/item/TMR_img2.jpg"},{"title":"展示3","src":"../img/item/TMR_img3.jpg"},{"title":"展示4","src":"../img/item/TMR_img4.jpg"},{"title":"展示5","src":"../img/item/TMR_img5.jpg"}]', 'Terminator: Resistance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.11.15上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一人稱射擊FPS', '《終結者：抵抗》的遊戲故事背景設定在審判日結束30年後，滿目瘡痍的未來洛杉矶，玩家将扮演二等兵Jacob Rivers，投身到洛杉矶抵抗組織對抗天網的戰鬥中，玩家将在遊玩過程中漸漸發現，自己其實是天網的最新目标。  遊戲中包含許多主線和支線任務，玩家可以按照自己喜歡的方式去進行遊戲，既可以和敵人正面剛槍，又可以利用黑客技術暗地裏摧毀敵人。主角的技能可以進行升級，逐漸使得Rivers真正成爲一名能夠和天網對抗的抵抗組織士兵。'),
(1, 'AED', '帝国时代2：决定版', 'Age of Empires II: Definiti', '￥99.00', '￥89.00', '11月14日', '-10%', '[{"title":"商品竖","src":"../img/index/PC_game_img_2.jpg"},{"title":"商品横","src":"../img/item/AED_des.jpg"},{"title":"展示1","src":"../img/item/AED_img1.jpg"},{"title":"展示2","src":"../img/item/AED_img2.jpg"},{"title":"展示3","src":"../img/item/AED_img3.jpg"},{"title":"展示4","src":"../img/item/AED_img4.jpg"},{"title":"展示5","src":"../img/item/AED_img5.jpg"}]', 'Age of Empires II: Definitive Edition|2019.11.15上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即時戰略RTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支持中文', '有史以來最受歡迎的戰略遊戲之一迎來 20 周年，爲此我們推出了《帝國時代 II：決定版》。本作擁有驚人的 4K 超高清畫質，全面重置的新原聲音樂，以及内含 3 個新戰役和 4 個新文明的全新内容：《最後的可汗》。  橫跨人類 1000 年的曆史，超過 200 個小時的遊戲時長，以前所未有的方式探索全部的原版戰役以及熱銷擴展包的内容。在線挑戰主宰 35 個不同文明的其他玩家，伴随着時代的更叠，踏上支配世界的征程。  在這款有史以來最受喜愛的戰略遊戲決定性重制版中，選擇您成就非凡的道路。'),
(2, 'SWJ', '星球大战 绝地：陨落的', 'Star Wars Jedi: Fallen Ord', '￥308.00', '￥277.00', '11月15日', '-10%', '[{"title":"商品竖","src":"../img/index/PC_game_img_3.jpg"},{"title":"商品横","src":"../img/item/SWJ_des.jpg"},{"title":"展示1","src":"../img/item/SWJ_img1.jpg"},{"title":"展示2","src":"../img/item/SWJ_img2.jpg"},{"title":"展示3","src":"../img/item/SWJ_img3.jpg"},{"title":"展示4","src":"../img/item/SWJ_img4.jpg"},{"title":"展示5","src":"../img/item/SWJ_img5.jpg"}]', 'Star Wars Jedi: Fallen Order&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.11.15上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;動作射擊STG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支持中文', '有史以來最受歡迎的戰略遊戲之一迎來 20 周年，爲此我們推出了《帝國時代 II：決定版》。本作擁有驚人的 4K 超高清畫質，全面重置的新原聲音樂，以及内含 3 個新戰役和 4 個新文明的全新内容：《最後的可汗》。  橫跨人類 1000 年的曆史，超過 200 個小時的遊戲時長，以前所未有的方式探索全部的原版戰役以及熱銷擴展包的内容。在線挑戰主宰 35 個不同文明的其他玩家，伴随着時代的更叠，踏上支配世界的征程。  在這款有史以來最受喜愛的戰略遊戲決定性重制版中，選擇您成就非凡的道路。'),
(3, 'BUS', '黑猫侦探：深入本质', 'Blacksad - Under the Skin', '¥116.00', '¥104.00', '11月13日', '-10%', '[{"title":"商品竖","src":"../img/index/PC_game_img_4.jpg"},{"title":"商品横","src":"../img/item/BUS_des.jpg"},{"title":"展示1","src":"../img/item/BUS_img1.jpg"},{"title":"展示2","src":"../img/item/BUS_img2.jpg"},{"title":"展示3","src":"../img/item/BUS_img3.jpg"},{"title":"展示4","src":"../img/item/BUS_img4.jpg"},{"title":"展示5","src":"../img/item/BUS_img5.jpg"}]', 'Blacksad - Under the Skin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.11.14上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;冒險遊戲AVG', '一個黑暗的腐敗醜聞在紐約市的黑社會的核心魅力偵探約翰·布萊克薩德！  50年代，紐約：一家拳擊俱樂部的老闆喬·鄧恩被發現死亡。  與此同時，新星鮑比·耶魯，由于參加了他職業生涯中最重要的一場拳擊賽，神秘地消失了。  喬的女兒索尼娅·鄧恩（SoniaDunn）接管了體育館，必須處理好它的财務問題。她聘請私人偵探約翰·布萊克薩德調查耶魯大學失蹤案。這一險惡的案件将把我們的調查員帶到紐約最黑暗、最黑暗的深處。  憑借其拟人化的人物形象和上世紀50年代令人難以置信的感覺，《黑皮膚：在皮膚下》承諾了偵探小說中所有可怕的黑暗冒險，就像同名的漫畫系列一樣。  以你自己的方式進行調查。當你尋找新的線索時，利用你的貓的感官。代表Blacksad做出決定并影響案件的結果。 特征：  一個正式的全新的故事，爲黑廣告，設置在漫畫系列的獨特世界，完美地爲玩家重現。 一個調查性的叙事遊戲，結合了調查，謎題，快速時間事件（qte）和多選對話的遊戲。 直接影響人物發展和故事結局的選擇。 超過30個字符，包括新面孔和舊的最愛，每個都有自己的故事。 這是一個沉浸式的世界，有爵士樂的原聲帶，可以與好萊塢最好的黑色電影相媲美。 冒險遊戲的粉絲們會喜歡它的遊戲和叙述，而漫畫系列的粉絲們會興奮地重新發現這個獨特世界的人物和圖形風格。 拟人動物的黑暗世界'),
(4, 'RSG', '浪漫沙迦3', 'Romancing SaGa 3', '￥199.00', '￥143.00', '11月12日', '-28%', '[{"title":"商品竖","src":"../img/index/PC_game_img_5.jpg"},{"title":"商品横","src":"../img/item/RSG_des.jpg"},{"title":"展示1","src":"../img/item/RSG_img1.jpg"},{"title":"展示2","src":"../img/item/RSG_img2.jpg"},{"title":"展示3","src":"../img/item/RSG_img3.jpg"},{"title":"展示4","src":"../img/item/RSG_img4.jpg"},{"title":"展示5","src":"../img/item/RSG_img5.jpg"}]', 'Romancing SaGa 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.11.12上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;角色扮演RPG', '著名的經典角色扮演遊戲再次登場！《Romancing SaGa™ 3》由包括傳奇開發者Akitoshi Kawazu在内的行業老手開發，最初于1995年在日本發行。這款傳奇角色扮演遊戲傑作的高清重制版引入了優化的圖形、新的可探索地牢、新的劇情和新遊戲+功能。從8個獨特的主角中選擇一個，開啓你自己選擇的史詩冒險之旅！  每隔300年，暗星遮擋太陽的天文現象——“死蝕”就會威脅着我們這個世界的存在。那一年出生的人注定會在當年結束前被奪走生命。無論是人類還是野獸，無一能夠幸免。  然而，有一次，一個孩子确實活了下來。他爲死亡的力量所吸引，并使用它征服了世界。他被人們稱爲了“魔王”。可有一天，他突然就消失了。  又過了300年，又一個孩子再次挑戰命運。她并未屈服于曾經控制住魔王的那股力量；而她後來被稱爲了聖王。  距離上一次死蝕已經過去了20年；而自聖王出現到現在已有300餘年了。人類現在站在了希望和絕望之間的支點上。  會有另一個宿命之子出現嗎？ 這個孩子會是正義的還是邪惡的，抑或會帶來無法爲世人所理解的另一種力量？'),
(5, 'TLB', '损友传奇', 'The Legend of Bum-bo', '￥50.00', '￥45.00', '11月11日', '-10%', '[{"title":"商品竖","src":"../img/index/PC_game_img_6.jpg"},{"title":"商品横","src":"../img/item/TLB_des.jpg"},{"title":"展示1","src":"../img/item/TLB_img1.jpg"},{"title":"展示2","src":"../img/item/TLB_img2.jpg"},{"title":"展示3","src":"../img/item/TLB_img3.jpg"},{"title":"展示4","src":"../img/item/TLB_img4.jpg"},{"title":"展示5","src":"../img/item/TLB_img5.jpg"}]', 'The Legend of Bum-bo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.11.12上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;角色扮演RPG', '著名的經典角色扮演遊戲再次登場！《Romancing SaGa™ 3》由包括傳奇開發者Akitoshi Kawazu在内的行業老手開發，最初于1995年在日本發行。這款傳奇角色扮演遊戲傑作的高清重制版引入了優化的圖形、新的可探索地牢、新的劇情和新遊戲+功能。從8個獨特的主角中選擇一個，開啓你自己選擇的史詩冒險之旅！  每隔300年，暗星遮擋太陽的天文現象——“死蝕”就會威脅着我們這個世界的存在。那一年出生的人注定會在當年結束前被奪走生命。無論是人類還是野獸，無一能夠幸免。  然而，有一次，一個孩子确實活了下來。他爲死亡的力量所吸引，并使用它征服了世界。他被人們稱爲了“魔王”。可有一天，他突然就消失了。  又過了300年，又一個孩子再次挑戰命運。她并未屈服于曾經控制住魔王的那股力量；而她後來被稱爲了聖王。  距離上一次死蝕已經過去了20年；而自聖王出現到現在已有300餘年了。人類現在站在了希望和絕望之間的支點上。  會有另一個宿命之子出現嗎？ 這個孩子會是正義的還是邪惡的，抑或會帶來無法爲世人所理解的另一種力量？'),
(6, 'JVG', '勇敢者的游戏：游戏版', 'JUMANJI: The Video Gam', '￥116.00', '￥104.00', '11月11日', '-10%', '[{"title":"商品竖","src":"../img/index/PC_game_img_7.jpg"},{"title":"商品横","src":"../img/item/JVG_des.jpg"},{"title":"展示1","src":"../img/item/JVG_img1.jpg"},{"title":"展示2","src":"../img/item/JVG_img2.jpg"},{"title":"展示3","src":"../img/item/JVG_img3.jpg"},{"title":"展示4","src":"../img/item/JVG_img4.jpg"},{"title":"展示5","src":"../img/item/JVG_img5.jpg"}]', 'JUMANJI: The Video Game&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.11.09上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;動作遊戲ACT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支持中文', '如果你想遠離塵嚣，就讓我們相聚在緊張刺激的勇敢者遊戲中，體驗冒險與歡樂，共同迎接終極挑戰。聯機、分屏或與 AI 隊友合作，利用勇石博士、露比、老鼠和奧伯倫教授的特殊技能，擊敗敵人，拯救世界！  • 重返叢林——玩家将扮演電影角色勇石博士、露比、老鼠和奧伯倫教授，體驗一場有趣的全新 3D 動作冒險。 • 組隊合作——聯機或分屏遊戲，與多達三名好友或 AI 隊友合作，一起打敗敵人，逃離緻命陷阱并拯救世界。 • 危險地帶——更加廣闊的勇敢者遊戲世界，新增美麗卻緻命的山脈、都市和叢林場景。 • 無盡的冒險——提升戰術和技能，解鎖新裝備和武器種類，每一輪勇敢者遊戲都是獨一無二的！'),
(7, 'NSH', '极品飞车21：热度', 'Need for Speed Heat', '￥429.00', '￥399.00', '11月11日', '-7%', '[{"title":"商品竖","src":"../img/index/PC_game_img_8.jpg"},{"title":"商品横","src":"../img/item/NSH_des.jpg"},{"title":"展示1","src":"../img/item/NSH_img1.jpg"},{"title":"展示2","src":"../img/item/NSH_img2.jpg"},{"title":"展示3","src":"../img/item/NSH_img3.jpg"},{"title":"展示4","src":"../img/item/NSH_img4.jpg"},{"title":"展示5","src":"../img/item/NSH_img5.jpg"}]', 'Need for Speed Heat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.11.08上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;賽車競速RAC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支持中文', '《極品飛車：熱度》是由Ghost Games制作，EA發行的《極品飛車》系列遊戲新作。  該系列虔誠地展現了真實賽車文化，有着出色的畫面和酷炫的音效，Ghost Games也在不斷優化車輛駕駛和漂移的手感，以求帶給玩家更棒的遊戲體驗。  IGN爲這款遊戲打出了的8.0分的評分。IGN的編輯認爲《極品飛車21：熱度》是一款融合了很多現有理念的遊戲，但它無疑是多年以來最令人深刻的《極品飛車》系列遊戲。'),
(8, 'TM2', '昏迷2', 'The Coma 2', '￥41.00', '￥36.00', '11月10日', '-12%', '[{"title":"商品竖","src":"../img/index/PC_game_img_9.jpg"},{"title":"商品横","src":"../img/item/TM2_des.jpg"},{"title":"展示1","src":"../img/item/TM2_img1.jpg"},{"title":"展示2","src":"../img/item/TM2_img2.jpg"},{"title":"展示3","src":"../img/item/TM2_img3.jpg"},{"title":"展示4","src":"../img/item/TM2_img4.jpg"},{"title":"展示5","src":"../img/item/TM2_img5.jpg"}]', 'The Coma 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.11.08上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;冒險遊戲AVG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支持中文', '世華高中的學生樸美娜深夜在校園醒來。她很快意識到事情有些不對勁。這個曾經缭繞着讀書聲的校園被邪惡力量所扭曲。她被看上去像是英語老師的怪物所追逐，爲求得生存，美娜必須逃離學校，進入周邊地區。在那裏，美娜将遇到邪惡的怪物，神秘的陌生人和善惡未知的盟友。    《The Coma 2: Vicious Sisters》是一款故事驅動的恐怖遊戲。遊戲世界中有着被噩夢扭曲的世華地區和一系列生動的角色，玩家需要在這裏解開謎題，發現隐藏的線索，并在瘋狂怪物的追擊下求得生存。  被迫面對無情噩夢的女主人公很難在每次遭遇中毫發無損的逃脫。随着故事的前進，美娜将會遭遇到各種導緻她受到永久傷害的重傷。要想避免這樣的情況發生，必須仔細尋找場景，收集物品并制作能夠回避危險的道具。  黑暗宋老師的追擊比以往更加危險。落入她的掌中幾乎等于死路一條。跑動或者點起燈光會讓她更加容易發現你。在緊急逃生與探索之間做好平衡，生存下去吧！    特色: 黑暗宋老師的無盡追擊現在搭載了全新AI，更加可怕。 制造道具來爲生死一線的情況做好準備。 探索被噩夢籠罩的世華高中，探索其黑暗的秘密。 收集資源，從緻命的遭遇和負面狀态下存活。 解鎖工具和升級來訪問之前無法進入的區域。 栩栩如生的手繪場景以及動畫過場。  '),
(9, 'DSD', '死亡搁浅', 'Death Stranding', '￥298.00', '￥268.00', '11月10日', '-10%', '[{"title":"商品竖","src":"../img/index/PC_game_img_10.jpg"},{"title":"商品横","src":"../img/item/DSD_des.jpg"},{"title":"展示1","src":"../img/item/DSD_img1.jpg"},{"title":"展示2","src":"../img/item/DSD_img2.jpg"},{"title":"展示3","src":"../img/item/DSD_img3.jpg"},{"title":"展示4","src":"../img/item/DSD_img4.jpg"},{"title":"展示5","src":"../img/item/DSD_img5.jpg"}]', 'Death Stranding&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.11.08上市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;動作遊戲ACT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支持中文', '山姆·布裏吉斯（Sam Bridges）必須直面因死亡擱淺而面目全非的世界。他手握殘存的希望碎片，踏上征途，逐步重建已分崩離析的世界。  鬼魅橫行，人類瀕臨滅亡。山姆身負重任，橫跨滿目瘡痍的大陸，拯救面臨滅頂之災的人類。  死亡擱淺的真相是什麽？前行之路上，山姆會有何發現？你将在前所未有的遊戲體驗中找到答案。  諾曼·瑞杜斯 (Norman Reedus)、麥斯·米科爾森 (Mads Mikkelsen)、蕾雅·賽杜 (Léa Seydoux)、琳賽·瓦格納 (Lindsay Wagner)傾情出演。');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `phone` bigint(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `phone`, `password`) VALUES
(7, 17845464333, '131313'),
(8, 17845464622, '131313'),
(9, 1, '2'),
(10, 13313131333, '131313'),
(11, 13313131233, '131313'),
(12, 17845464322, '131313'),
(13, 17858381271, '121212');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
