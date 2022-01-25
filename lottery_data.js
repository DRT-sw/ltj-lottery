var lottery_initial_datas =[
    {
        "nameen": "avatar1",
        "namezh": "顾晟",
        "wish": "新年快乐，祝各位在2022年有趣有盼，内心充盈，遇见美好，日子欣喜。"
        },
        {
        "nameen": "avatar2",
        "namezh": "聂然",
        "wish": "新年新气象，恭喜发财，新年快乐！"
        },
        {
        "nameen": "avatar3",
        "namezh": "吴海亮",
        "wish": "新年祝福到,平安健康最重要。新年快乐！"
        },
        {
        "nameen": "avatar4",
        "namezh": "黄许",
        "wish": "新的生活，新的进步，新的问候，新的喜庆，朋友，新春快乐!"
        },
        {
        "nameen": "avatar5",
        "namezh": "鲍静怡",
        "wish": "祝您事事均顺利，全家幸福更健康，新春快乐!"
        },
        {
        "nameen": "avatar6",
        "namezh": "曹连娇",
        "wish": "新年快乐，祝福送到，好运来到，问候也到。"
        },
        {
        "nameen": "avatar7",
        "namezh": "李豪雄",
        "wish": "新年祝福，希望大家每天都被钞票砸醒！"
        },
        {
        "nameen": "avatar8",
        "namezh": "厉东明",
        "wish": "新年快乐，大家发财。"
        },
        {
        "nameen": "avatar9",
        "namezh": "周林",
        "wish": "祝大家2022如虎添亿，万事胜意，心想事成，好运连连！。"
        },
        {
        "nameen": "avatar10",
        "namezh": "刘锦",
        "wish": "新的努力成就新的成功，新的时光记录新的幸福!2022，新年快乐!"
        },
        {
        "nameen": "avatar11",
        "namezh": "王涛",
        "wish": "祝大家新年快乐，祥瑞新年。"
        },
        {
        "nameen": "avatar12",
        "namezh": "陶林林",
        "wish": "新的一年新气象！祝大家新年哈哈开口笑，一年更比一年好！"
        },
        {
        "nameen": "avatar13",
        "namezh": "黄凯",
        "wish": "祝大家新年快乐，祥瑞新年。"
        },
        {
        "nameen": "avatar14",
        "namezh": "周泽宇",
        "wish": "新年快乐，祝大家数钱数到手抽筋，做梦做到自然醒。"
        },
        {
        "nameen": "avatar15",
        "namezh": "刘明昊",
        "wish": "新年快乐，祝大家万事大吉，合家欢乐，财源广进，恭喜发财！"
        },
        {
        "nameen": "avatar16",
        "namezh": "汤杰",
        "wish": "新年快乐，祝大家万事大吉，虎虎生威！"
        },
        {
        "nameen": "avatar17",
        "namezh": "阎迟",
        "wish": "新年快乐，祝大家财源滚滚，心想事成，身体健康，家庭和睦！"
        },
        {
        "nameen": "avatar18",
        "namezh": "宋子奇",
        "wish": "祝大家新春快乐，家庭和睦，身体健康，万事胜意。"
        },
        {
        "nameen": "avatar19",
        "namezh": "唐光飞",
        "wish": "新年快乐，万事如意！！！"
        },
        {
        "nameen": "avatar20",
        "namezh": "丁润涛",
        "wish": "新年快乐，声声祝福，丝丝情谊，串串思念，留在诸位的心田，祝新年快乐，万事如意。"
        },
        {
        "nameen": "avatar21",
        "namezh": "张雨",
        "wish": "祝大家新年快乐，万事如意，好运滚滚来，虎年发大财。"
        },
        {
        "nameen": "avatar22",
        "namezh": "张传武",
        "wish": "祝大家新年快乐，平安喜乐，万事胜意。"
        },
        {
        "nameen": "avatar23",
        "namezh": "江信宇",
        "wish": "祝大家在新的一年里，平安喜乐，万事胜意！"
        },
        {
        "nameen": "avatar24",
        "namezh": "蔡佳恒",
        "wish": "祝大家新的一年身体健康，工作顺利，生活美满，万事如意！"
        },
        {
        "nameen": "avatar25",
        "namezh": "李树鑫",
        "wish": "把酒碰盏，谢诸君伴，提笔蕴辞，愿各友安"
        }
];

var award_config = {
    "award01": 3,
    "award02": 6,
    "award03": 5
};

// 初始化数据
if (!localStorage.getItem('lottery_initial')) {
    var data_str = JSON.stringify(lottery_initial_datas);
    localStorage.setItem('lottery_initial', data_str);
}
if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}