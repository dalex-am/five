const fiveCharWordsList = [
  "аббат",
  "абзац",
  "аборт",
  "абхаз",
  "аванс",
  "авеню",
  "авось",
  "аврал",
  "автор",
  "агава",
  "агент",
  "агнец",
  "адепт",
  "адрес",
  "азарт",
  "азиат",
  "аймак",
  "айран",
  "акрил",
  "актёр",
  "актив",
  "акула",
  "акциз",
  "акция",
  "алиби",
  "алкаш",
  "аллея",
  "аллюр",
  "алмаз",
  "алтын",
  "алыча",
  "альфа",
  "амбар",
  "амбре",
  "амёба",
  "ампер",
  "ампир",
  "ангел",
  "анион",
  "анкер",
  "анонс",
  "аорта",
  "апорт",
  "арбуз",
  "аргон",
  "ареал",
  "арена",
  "арест",
  "ариец",
  "аркан",
  "армия",
  "архив",
  "аршин",
  "аскет",
  "астма",
  "астра",
  "атака",
  "атлас",
  "атлет",
  "атолл",
  "афера",
  "афиша",
  "ацтек",
  "аэроб",
  "бабка",
  "багаж",
  "багги",
  "багет",
  "бадья",
  "базар",
  "базис",
  "байка",
  "балда",
  "балет",
  "балка",
  "балык",
  "банан",
  "банда",
  "банка",
  "барак",
  "баран",
  "баржа",
  "барий",
  "барин",
  "барон",
  "басня",
  "басон",
  "батат",
  "батон",
  "батут",
  "бахча",
  "бачок",
  "башка",
  "башня",
  "бегун",
  "бедро",
  "бекар",
  "бекас",
  "бекон",
  "белка",
  "белок",
  "бельё",
  "беляк",
  "беляш",
  "берег",
  "берет",
  "бетон",
  "бидон",
  "бизон",
  "билет",
  "билль",
  "бином",
  "биржа",
  "бирка",
  "бисер",
  "битва",
  "битум",
  "битьё",
  "благо",
  "блажь",
  "бланк",
  "блеск",
  "близь",
  "блоха",
  "блуза",
  "блюдо",
  "бляха",
  "бобёр",
  "богач",
  "бойня",
  "бокал",
  "болид",
  "бомба",
  "бордо",
  "борей",
  "борец",
  "боров",
  "босяк",
  "ботва",
  "бочка",
  "бочок",
  "браво",
  "брага",
  "брань",
  "брасс",
  "бремя",
  "брешь",
  "бридж",
  "бриль",
  "бритт",
  "бровь",
  "бронх",
  "броня",
  "брошь",
  "брюки",
  "брюхо",
  "бубен",
  "бубон",
  "бугай",
  "бугор",
  "будка",
  "буква",
  "букет",
  "букса",
  "булат",
  "булка",
  "буран",
  "бурда",
  "бурка",
  "бурят",
  "бутан",
  "бутон",
  "бутса",
  "буфер",
  "буфет",
  "бухта",
  "быдло",
  "бытие",
  "бычок",
  "вагон",
  "валет",
  "валик",
  "валка",
  "валун",
  "вальс",
  "ванна",
  "варан",
  "варка",
  "варяг",
  "вафля",
  "вахта",
  "вдова",
  "ведро",
  "ведун",
  "велюр",
  "венгр",
  "венец",
  "веник",
  "венок",
  "вепрь",
  "верба",
  "вервь",
  "верес",
  "верфь",
  "весло",
  "весна",
  "весть",
  "ветвь",
  "ветер",
  "ветка",
  "вечер",
  "взвод",
  "вздор",
  "вздох",
  "взлёт",
  "взлом",
  "взмах",
  "взнос",
  "взрыв",
  "взыск",
  "видео",
  "визаж",
  "визир",
  "визит",
  "вилка",
  "вилла",
  "вираж",
  "вирус",
  "виски",
  "висок",
  "виток",
  "вихрь",
  "вишня",
  "вклад",
  "влага",
  "вобла",
  "водка",
  "вожак",
  "вождь",
  "вожжа",
  "возня",
  "война",
  "вокал",
  "волан",
  "волна",
  "волос",
  "волхв",
  "вольт",
  "вопль",
  "ворон",
  "ворот",
  "ворох",
  "ворьё",
  "вотум",
  "вояка",
  "впуск",
  "время",
  "всход",
  "вуаль",
  "въезд",
  "выбор",
  "вывих",
  "вывод",
  "вывоз",
  "выгиб",
  "выгул",
  "выдох",
  "выдра",
  "выдув",
  "выезд",
  "вызов",
  "выкат",
  "выкуп",
  "вылет",
  "вылов",
  "вынос",
  "выпад",
  "выпас",
  "выпор",
  "вырез",
  "выход",
  "вычет",
  "вышка",
  "вьюга",
  "вязка",
  "газон",
  "гайка",
  "галка",
  "галоп",
  "галун",
  "гамак",
  "гамма",
  "гараж",
  "гарем",
  "гашиш",
  "гейша",
  "гелий",
  "гений",
  "герой",
  "гетра",
  "гетто",
  "гжель",
  "гидра",
  "гиена",
  "глава",
  "гладь",
  "глина",
  "глист",
  "глубь",
  "глушь",
  "глыба",
  "глясе",
  "гнида",
  "гниль",
  "гнома",
  "гобой",
  "говор",
  "гогот",
  "голод",
  "голос",
  "гольд",
  "гольё",
  "гольф",
  "голяк",
  "гомон",
  "гонец",
  "гонка",
  "гонор",
  "гопак",
  "горец",
  "горка",
  "горло",
  "город",
  "горох",
  "гость",
  "грамм",
  "гранд",
  "грань",
  "графа",
  "грёза",
  "греча",
  "грива",
  "гриль",
  "грипп",
  "гроза",
  "грозд",
  "гросс",
  "груда",
  "грудь",
  "грунт",
  "груша",
  "грыжа",
  "гряда",
  "грязь",
  "гуано",
  "гуашь",
  "губан",
  "губка",
  "гудок",
  "гузно",
  "гуляш",
  "гумно",
  "гумус",
  "гусак",
  "гусар",
  "гусли",
  "давка",
  "дамба",
  "дамка",
  "дверь",
  "дебет",
  "дебил",
  "дебош",
  "дебри",
  "дебют",
  "девиз",
  "деизм",
  "деист",
  "декан",
  "декор",
  "делёж",
  "делец",
  "демон",
  "денди",
  "дерби",
  "дерма",
  "десна",
  "детва",
  "дефис",
  "джига",
  "джинн",
  "дзета",
  "дзюдо",
  "диван",
  "диета",
  "динар",
  "динго",
  "длань",
  "длина",
  "днище",
  "добор",
  "добро",
  "довод",
  "догма",
  "дождь",
  "дожим",
  "дозор",
  "дойка",
  "докер",
  "домен",
  "домер",
  "домна",
  "домра",
  "донор",
  "донос",
  "доска",
  "досуг",
  "досье",
  "доход",
  "дочка",
  "драже",
  "драка",
  "драма",
  "древо",
  "дрейф",
  "дрель",
  "дрёма",
  "дробь",
  "дрожь",
  "дрозд",
  "дрофа",
  "друид",
  "дрянь",
  "дубль",
  "дудка",
  "дудук",
  "дужка",
  "дукат",
  "дупло",
  "дурак",
  "дурка",
  "дутик",
  "дутыш",
  "духан",
  "душка",
  "дуэль",
  "дылда",
  "дымка",
  "дырка",
  "дышло",
  "дюшес",
  "дятел",
  "евнух",
  "еврей",
  "егерь",
  "егоза",
  "ежиха",
  "ездок",
  "ересь",
  "ёршик",
  "есаул",
  "жажда",
  "жарка",
  "жатва",
  "жёлоб",
  "желчь",
  "жених",
  "жердь",
  "жерло",
  "жесть",
  "жетон",
  "живец",
  "живот",
  "жизнь",
  "жилет",
  "жилец",
  "жилка",
  "жильё",
  "жираф",
  "житие",
  "житьё",
  "жница",
  "жокей",
  "жрица",
  "жулик",
  "жульё",
  "жучок",
  "забег",
  "забой",
  "забор",
  "завал",
  "завет",
  "завод",
  "завоз",
  "завуч",
  "загар",
  "загиб",
  "загон",
  "загул",
  "задел",
  "задор",
  "заезд",
  "зажим",
  "зазор",
  "заика",
  "заказ",
  "закал",
  "закат",
  "закон",
  "закуп",
  "залёт",
  "залив",
  "залог",
  "залом",
  "замах",
  "замес",
  "замок",
  "замша",
  "занос",
  "запад",
  "запал",
  "запас",
  "запах",
  "запев",
  "запой",
  "запор",
  "зарез",
  "зарок",
  "заряд",
  "засев",
  "засов",
  "засол",
  "засос",
  "затея",
  "затон",
  "затор",
  "заход",
  "зацеп",
  "зачёс",
  "зачёт",
  "зачин",
  "звено",
  "зверь",
  "зебра",
  "зевок",
  "зелье",
  "земля",
  "зенит",
  "зерно",
  "зефир",
  "зипун",
  "злато",
  "злоба",
  "злюка",
  "знамя",
  "знать",
  "зомби",
  "зраза",
  "зубец",
  "иваси",
  "иврит",
  "игрек",
  "игрок",
  "идеал",
  "идиом",
  "идиот",
  "ижица",
  "извоз",
  "изгиб",
  "изгой",
  "излом",
  "измол",
  "измор",
  "износ",
  "изъян",
  "изыск",
  "икона",
  "икота",
  "имидж",
  "индий",
  "индус",
  "индюк",
  "инжир",
  "интим",
  "иприт",
  "ирбис",
  "искра",
  "ислам",
  "испуг",
  "истец",
  "исток",
  "исход",
  "иудей",
  "кабак",
  "кабан",
  "каган",
  "кагор",
  "кадет",
  "кадка",
  "кадык",
  "казак",
  "казан",
  "казах",
  "казна",
  "казнь",
  "казус",
  "кайло",
  "кайма",
  "какао",
  "калач",
  "калий",
  "калиф",
  "калым",
  "камея",
  "камин",
  "камыш",
  "канал",
  "канат",
  "канва",
  "канон",
  "каноэ",
  "канун",
  "капер",
  "капля",
  "капор",
  "капот",
  "каппа",
  "карат",
  "карга",
  "кариб",
  "карта",
  "каска",
  "касса",
  "каста",
  "катер",
  "катет",
  "катод",
  "каток",
  "качка",
  "кашне",
  "кашпо",
  "каюта",
  "квант",
  "кварк",
  "кварц",
  "квота",
  "кегля",
  "кельт",
  "келья",
  "кепка",
  "кефир",
  "кивок",
  "кинза",
  "киоск",
  "кирза",
  "кисет",
  "киста",
  "кисть",
  "кифоз",
  "кишка",
  "кладь",
  "класс",
  "клерк",
  "клипс",
  "клише",
  "клоун",
  "клуша",
  "клюка",
  "кляча",
  "кнель",
  "книга",
  "князь",
  "коала",
  "кобра",
  "ковёр",
  "ковка",
  "кожух",
  "козёл",
  "койка",
  "койот",
  "кокон",
  "кокос",
  "колба",
  "колея",
  "колик",
  "колка",
  "колли",
  "колос",
  "колун",
  "колье",
  "кольт",
  "комар",
  "комик",
  "комод",
  "комок",
  "конёк",
  "конец",
  "конус",
  "конюх",
  "копир",
  "копия",
  "копка",
  "копна",
  "копьё",
  "кореш",
  "корка",
  "короб",
  "кость",
  "косяк",
  "котёл",
  "кофта",
  "кочан",
  "кочка",
  "кошка",
  "кощей",
  "крага",
  "кража",
  "краля",
  "краса",
  "кредо",
  "креол",
  "кресс",
  "крест",
  "криль",
  "кровь",
  "кроль",
  "крона",
  "кросс",
  "кроха",
  "круиз",
  "крупа",
  "круть",
  "круча",
  "крыло",
  "крыса",
  "крыша",
  "кубик",
  "кубок",
  "кудри",
  "кузен",
  "кузня",
  "кузов",
  "кукан",
  "кукиш",
  "кукла",
  "кулак",
  "кулёк",
  "кулик",
  "кулич",
  "кулон",
  "культ",
  "кумач",
  "кумир",
  "кумыс",
  "купаж",
  "купец",
  "купля",
  "купол",
  "купон",
  "кураж",
  "курок",
  "кусок",
  "кутёж",
  "кутья",
  "кухня",
  "кучер",
  "кучка",
  "кушак",
  "кювет",
  "кюрин",
  "лаваш",
  "лавка",
  "лавра",
  "ладан",
  "ладья",
  "лазер",
  "лазок",
  "лайка",
  "лакей",
  "лампа",
  "лапта",
  "лапша",
  "ларёк",
  "ларец",
  "ласка",
  "лассо",
  "латук",
  "латыш",
  "лафет",
  "лафит",
  "левак",
  "левша",
  "легаш",
  "лежак",
  "лейка",
  "лемма",
  "лемур",
  "лента",
  "ленца",
  "лепет",
  "лепка",
  "лепра",
  "лепта",
  "леска",
  "лесть",
  "летун",
  "леший",
  "лиана",
  "ливер",
  "лидер",
  "лизун",
  "ликёр",
  "лилия",
  "лимит",
  "лимон",
  "лимфа",
  "линза",
  "линия",
  "лирик",
  "литер",
  "литьё",
  "лихач",
  "лицей",
  "лишай",
  "лобби",
  "лобик",
  "лобок",
  "ловец",
  "ловля",
  "логик",
  "лодка",
  "ложка",
  "локон",
  "ломка",
  "лопух",
  "лоток",
  "лотос",
  "лубок",
  "лунка",
  "лыжня",
  "люпин",
  "лютик",
  "лютня",
  "ляжка",
  "лямка",
  "ляшка",
  "магия",
  "магма",
  "мадам",
  "мажор",
  "мазер",
  "мазня",
  "мазок",
  "мазут",
  "майка",
  "майор",
  "макет",
  "малёк",
  "малец",
  "малыш",
  "маляр",
  "мамба",
  "манго",
  "манеж",
  "манер",
  "мания",
  "манка",
  "манна",
  "манул",
  "маори",
  "марго",
  "марка",
  "марля",
  "маска",
  "масло",
  "масон",
  "масса",
  "масть",
  "матка",
  "мафия",
  "махан",
  "мачта",
  "медик",
  "медяк",
  "мезон",
  "мекка",
  "мерин",
  "мерка",
  "месса",
  "место",
  "месть",
  "месье",
  "месяц",
  "метан",
  "метис",
  "метка",
  "мётка",
  "метла",
  "метод",
  "метро",
  "мечта",
  "мешок",
  "мидия",
  "мизер",
  "минёр",
  "минор",
  "минус",
  "миома",
  "мираж",
  "мирон",
  "миска",
  "митоз",
  "мишка",
  "мойва",
  "мойка",
  "мойра",
  "мокко",
  "мокша",
  "молва",
  "молот",
  "молох",
  "моляр",
  "монах",
  "мопед",
  "морда",
  "мороз",
  "моряк",
  "мосол",
  "мосье",
  "мотив",
  "мотня",
  "моток",
  "мотор",
  "мохер",
  "мочка",
  "мошка",
  "мразь",
  "мужик",
  "музей",
  "мулат",
  "мулла",
  "муляж",
  "мумиё",
  "мумия",
  "мурза",
  "мусор",
  "мутон",
  "муфта",
  "мушар",
  "мушка",
  "мымра",
  "мысль",
  "мысок",
  "мытьё",
  "мышца",
  "мэрия",
  "мякиш",
  "мялка",
  "мямля",
  "мятеж",
  "набат",
  "набег",
  "набор",
  "навар",
  "навес",
  "навис",
  "навоз",
  "навык",
  "наган",
  "нагар",
  "надел",
  "надув",
  "наезд",
  "нажим",
  "наказ",
  "накал",
  "накат",
  "налёт",
  "налив",
  "налим",
  "налог",
  "намаз",
  "намёк",
  "намыв",
  "нанос",
  "напев",
  "напор",
  "нарез",
  "народ",
  "нарыв",
  "наряд",
  "насос",
  "натяг",
  "наука",
  "нахал",
  "нация",
  "начёс",
  "начин",
  "невод",
  "недуг",
  "немец",
  "немка",
  "ненец",
  "ненка",
  "нерка",
  "нерпа",
  "нефть",
  "нечет",
  "нимфа",
  "нитка",
  "ничья",
  "ножик",
  "ножны",
  "нолик",
  "номер",
  "норка",
  "норма",
  "норов",
  "носик",
  "носка",
  "носок",
  "нужда",
  "нутро",
  "нырок",
  "нытик",
  "нытьё",
  "нюанс",
  "оазис",
  "обвал",
  "обвес",
  "обгон",
  "обдир",
  "обдув",
  "обжиг",
  "обжим",
  "обжог",
  "обзор",
  "обида",
  "обкат",
  "облёт",
  "облик",
  "облог",
  "облом",
  "обман",
  "обмен",
  "обмер",
  "обмыв",
  "обнос",
  "образ",
  "обрез",
  "оброк",
  "обруб",
  "обруч",
  "обрыв",
  "обряд",
  "обувь",
  "обуза",
  "обход",
  "объём",
  "обыск",
  "овраг",
  "огонь",
  "огрех",
  "одурь",
  "озеро",
  "озимь",
  "озноб",
  "океан",
  "окись",
  "оклад",
  "оклик",
  "окрас",
  "окрик",
  "округ",
  "окунь",
  "олень",
  "олива",
  "олимп",
  "олифа",
  "олово",
  "ольха",
  "омега",
  "омела",
  "омлет",
  "омуль",
  "оникс",
  "опала",
  "опека",
  "опера",
  "опись",
  "опиум",
  "оплот",
  "опока",
  "опора",
  "опрос",
  "оптик",
  "орава",
  "орала",
  "орало",
  "орган",
  "оргия",
  "орден",
  "ордер",
  "ореол",
  "орлан",
  "орляк",
  "осада",
  "осень",
  "осётр",
  "осина",
  "оскал",
  "ослик",
  "осман",
  "осмий",
  "осмос",
  "особа",
  "особь",
  "осоед",
  "осока",
  "остов",
  "отара",
  "отбой",
  "отбор",
  "отвал",
  "отвар",
  "отвес",
  "ответ",
  "отвод",
  "отгиб",
  "отгул",
  "отдел",
  "отдых",
  "отель",
  "отжиг",
  "отжим",
  "отзыв",
  "отказ",
  "откат",
  "откол",
  "откос",
  "откуп",
  "отлёт",
  "отлив",
  "отлов",
  "отмах",
  "отпад",
  "отпор",
  "отрез",
  "отрог",
  "отрок",
  "отруб",
  "отрыв",
  "отряд",
  "отсев",
  "отсек",
  "отсос",
  "отток",
  "отход",
  "отцеп",
  "отчёт",
  "отчим",
  "отъём",
  "офсет",
  "охват",
  "охота",
  "очерк",
  "ощупь",
  "падеж",
  "падёж",
  "пайка",
  "пакет",
  "пакля",
  "палас",
  "палач",
  "палец",
  "палка",
  "панно",
  "папка",
  "парад",
  "парик",
  "парка",
  "паром",
  "парта",
  "парун",
  "парус",
  "парча",
  "паста",
  "пасть",
  "пасха",
  "патио",
  "пауза",
  "пафос",
  "пацан",
  "пачка",
  "пашня",
  "певец",
  "пекло",
  "пемза",
  "пенал",
  "пенёк",
  "пение",
  "пенис",
  "пенка",
  "пенни",
  "пенье",
  "пепел",
  "перёд",
  "перец",
  "перст",
  "песец",
  "пёсик",
  "песнь",
  "песня",
  "песок",
  "петля",
  "петух",
  "печка",
  "пешка",
  "пиала",
  "пиано",
  "пивко",
  "пигус",
  "пижма",
  "пижон",
  "пикап",
  "пикет",
  "пилон",
  "пилот",
  "пинок",
  "пинта",
  "пират",
  "пирит",
  "пирог",
  "питон",
  "питьё",
  "пихта",
  "пицца",
  "плавь",
  "пламя",
  "пласт",
  "плата",
  "плато",
  "плаха",
  "плева",
  "плеер",
  "племя",
  "плеск",
  "плеть",
  "плечо",
  "плешь",
  "плита",
  "плоть",
  "плюха",
  "побег",
  "повар",
  "повод",
  "погон",
  "подой",
  "подол",
  "поезд",
  "пожар",
  "пожог",
  "позём",
  "позёр",
  "позор",
  "позыв",
  "пойло",
  "пойма",
  "поиск",
  "показ",
  "покат",
  "покер",
  "покой",
  "покос",
  "полба",
  "полёт",
  "полив",
  "полип",
  "полис",
  "полка",
  "полог",
  "полоз",
  "полом",
  "полюс",
  "поляк",
  "помёт",
  "помои",
  "помол",
  "помор",
  "помпа",
  "понос",
  "пончо",
  "попик",
  "попса",
  "порез",
  "порей",
  "порка",
  "порог",
  "порок",
  "порох",
  "поруб",
  "порча",
  "порыв",
  "посад",
  "посев",
  "посол",
  "посох",
  "посыл",
  "поток",
  "потоп",
  "потяг",
  "поход",
  "почва",
  "почёт",
  "почин",
  "почка",
  "почта",
  "пошив",
  "поэма",
  "право",
  "праща",
  "пресс",
  "приём",
  "прима",
  "принц",
  "приют",
  "проба",
  "проём",
  "проза",
  "просо",
  "профи",
  "прыск",
  "прыть",
  "прядь",
  "пряжа",
  "пряха",
  "псарь",
  "псина",
  "птаха",
  "птица",
  "пуант",
  "пугач",
  "пудра",
  "пульс",
  "пульт",
  "пункт",
  "пупок",
  "пурга",
  "пуфик",
  "пучок",
  "пушка",
  "пушок",
  "пчела",
  "пшено",
  "пыжик",
  "пырей",
  "пытка",
  "пышка",
  "пьеса",
  "пялка",
  "пятак",
  "пятка",
  "пятно",
  "пяток",
  "радар",
  "раджа",
  "радий",
  "радио",
  "радон",
  "разум",
  "район",
  "ракия",
  "рамка",
  "ранец",
  "растр",
  "раунд",
  "рахит",
  "рация",
  "рачок",
  "рвань",
  "рвота",
  "ребро",
  "ребус",
  "ревун",
  "регби",
  "редан",
  "редис",
  "редут",
  "режим",
  "резак",
  "резец",
  "резка",
  "резня",
  "резон",
  "рейка",
  "рельс",
  "рента",
  "репей",
  "репер",
  "репка",
  "речка",
  "решка",
  "рикша",
  "ринит",
  "риска",
  "рифма",
  "робот",
  "ровня",
  "рогач",
  "рогоз",
  "родич",
  "родня",
  "рожак",
  "рожок",
  "рожон",
  "розга",
  "рокер",
  "рокот",
  "ролик",
  "роман",
  "рондо",
  "ропот",
  "ротик",
  "ротор",
  "рохля",
  "рояль",
  "ртище",
  "ртуть",
  "рубеж",
  "рубец",
  "рубин",
  "рубка",
  "рубль",
  "ружьё",
  "руина",
  "рукав",
  "рулет",
  "рулон",
  "румба",
  "румын",
  "рупия",
  "рупор",
  "русак",
  "русло",
  "ручей",
  "ручка",
  "рыбак",
  "рыбка",
  "рывок",
  "рыжик",
  "рынок",
  "рысак",
  "рытьё",
  "рычаг",
  "рэкет",
  "рюмка",
  "рюшка",
  "рябец",
  "рябик",
  "ряска",
  "сабля",
  "саван",
  "садик",
  "садно",
  "сазан",
  "сайга",
  "сайра",
  "салат",
  "салон",
  "салют",
  "самбо",
  "самец",
  "самка",
  "санки",
  "сапёр",
  "сапог",
  "сапун",
  "сарай",
  "сатир",
  "сауна",
  "сахар",
  "сачок",
  "сброд",
  "сброс",
  "сбруя",
  "свара",
  "сваха",
  "свеча",
  "свиль",
  "свист",
  "свита",
  "свора",
  "свояк",
  "связь",
  "сглаз",
  "сдача",
  "сдвиг",
  "сдоба",
  "сеанс",
  "север",
  "седло",
  "сезон",
  "секта",
  "селен",
  "сёмга",
  "семья",
  "сенат",
  "сепия",
  "серия",
  "серсо",
  "сетка",
  "сечка",
  "сивка",
  "сивуч",
  "сигма",
  "сидор",
  "силач",
  "силок",
  "силос",
  "синод",
  "синус",
  "синяк",
  "сироп",
  "ситец",
  "ситро",
  "ситце",
  "сифон",
  "скала",
  "скарб",
  "скаут",
  "сквер",
  "скейт",
  "скетч",
  "склад",
  "склеп",
  "склон",
  "скоба",
  "скотч",
  "скрип",
  "скука",
  "скула",
  "скунс",
  "слава",
  "слайд",
  "слеза",
  "сленг",
  "слива",
  "слизь",
  "слово",
  "слуга",
  "слюда",
  "слюна",
  "смена",
  "смерд",
  "смерч",
  "смесь",
  "смета",
  "смола",
  "смотр",
  "смрад",
  "смута",
  "смысл",
  "снедь",
  "сноха",
  "сныть",
  "собор",
  "совет",
  "совок",
  "содом",
  "созыв",
  "сойка",
  "сокол",
  "солод",
  "сомик",
  "сонет",
  "сопка",
  "сопло",
  "сопля",
  "сорок",
  "сосед",
  "соска",
  "сосна",
  "сосок",
  "сосуд",
  "сотка",
  "сотня",
  "софит",
  "сошка",
  "спазм",
  "спесь",
  "спина",
  "спирт",
  "спица",
  "сплав",
  "сплин",
  "спора",
  "спорт",
  "спрей",
  "спрос",
  "спрут",
  "спуск",
  "среда",
  "ссора",
  "ссуда",
  "стадо",
  "сталь",
  "старт",
  "старь",
  "стать",
  "ствол",
  "створ",
  "стезя",
  "стела",
  "стена",
  "стенд",
  "степь",
  "стиль",
  "стоик",
  "столб",
  "столп",
  "стопа",
  "стояк",
  "страж",
  "страз",
  "страх",
  "стриж",
  "строй",
  "строп",
  "струп",
  "струя",
  "стужа",
  "судак",
  "судно",
  "судья",
  "суета",
  "сукно",
  "сумка",
  "сумма",
  "супер",
  "сурик",
  "сурок",
  "сусек",
  "сусло",
  "сутки",
  "суфле",
  "сучок",
  "сушка",
  "сфера",
  "схема",
  "сцена",
  "съезд",
  "сырец",
  "сырок",
  "сырьё",
  "сычуг",
  "сыщик",
  "сюжет",
  "сюита",
  "табак",
  "табло",
  "табор",
  "табун",
  "тазик",
  "тайга",
  "тайна",
  "такса",
  "такси",
  "талия",
  "талон",
  "тальк",
  "танго",
  "танец",
  "тапир",
  "тапка",
  "таран",
  "тариф",
  "таска",
  "татка",
  "тафта",
  "тахта",
  "тачка",
  "тварь",
  "твист",
  "театр",
  "тезис",
  "тёзка",
  "теизм",
  "теист",
  "текст",
  "телец",
  "телик",
  "тёлка",
  "тембр",
  "тенор",
  "тепло",
  "терем",
  "тёрка",
  "тесак",
  "тесто",
  "тесть",
  "тётка",
  "тиара",
  "типаж",
  "типун",
  "тираж",
  "тиран",
  "тиски",
  "титан",
  "титул",
  "товар",
  "толпа",
  "толща",
  "томан",
  "томат",
  "тоник",
  "тонна",
  "тонус",
  "топаз",
  "топка",
  "топор",
  "топот",
  "торба",
  "торец",
  "торий",
  "тоска",
  "тотем",
  "точка",
  "трава",
  "тракт",
  "транс",
  "транш",
  "трата",
  "траур",
  "трель",
  "треск",
  "трест",
  "треть",
  "трико",
  "триод",
  "тромб",
  "тропа",
  "труба",
  "труха",
  "трюмо",
  "тубус",
  "тузик",
  "тукан",
  "тулуп",
  "тулья",
  "туман",
  "тумба",
  "тунец",
  "тупик",
  "турка",
  "турок",
  "туфля",
  "тучка",
  "тушка",
  "тыква",
  "тычок",
  "тюбик",
  "тюфяк",
  "тягач",
  "тяжба",
  "тяпка",
  "убыль",
  "уголь",
  "угорь",
  "удаль",
  "удача",
  "удило",
  "узбек",
  "узник",
  "уйгур",
  "уклад",
  "уклон",
  "укроп",
  "уксус",
  "улика",
  "улица",
  "умник",
  "умора",
  "унтер",
  "унция",
  "упрёк",
  "упырь",
  "урина",
  "успех",
  "устав",
  "устой",
  "уступ",
  "устье",
  "утеря",
  "утеха",
  "утиль",
  "ухват",
  "учёба",
  "ущерб",
  "фавор",
  "фагот",
  "фазан",
  "фазис",
  "факел",
  "факир",
  "фальц",
  "фанат",
  "фарад",
  "фасад",
  "фасет",
  "фаска",
  "фасон",
  "фатум",
  "фауна",
  "фаянс",
  "фенол",
  "ферзь",
  "ферма",
  "феска",
  "фетиш",
  "фибра",
  "физик",
  "фикус",
  "филин",
  "фильм",
  "фимоз",
  "финал",
  "финик",
  "финиш",
  "финка",
  "фирма",
  "фишка",
  "фланг",
  "флирт",
  "флора",
  "флюид",
  "фляга",
  "фобия",
  "фокус",
  "фомка",
  "форма",
  "форум",
  "фотон",
  "фофан",
  "фраер",
  "фраза",
  "франк",
  "фрахт",
  "фреза",
  "френч",
  "фронт",
  "фрукт",
  "фугас",
  "фужер",
  "фуляр",
  "фураж",
  "фурия",
  "фурор",
  "футер",
  "футор",
  "фуфло",
  "фьорд",
  "фюрер",
  "хазар",
  "хайло",
  "хакер",
  "халат",
  "халва",
  "халиф",
  "ханжа",
  "ханша",
  "хапун",
  "харчо",
  "хвала",
  "хворь",
  "хвост",
  "хедер",
  "херес",
  "хиляк",
  "химик",
  "химия",
  "хинди",
  "хинду",
  "хинин",
  "хиппи",
  "хитин",
  "хлыст",
  "хлябь",
  "хмель",
  "хмурь",
  "хобби",
  "хобот",
  "ходок",
  "ходун",
  "холка",
  "холод",
  "холоп",
  "холст",
  "холуй",
  "хомут",
  "хомяк",
  "хорал",
  "хорда",
  "хорей",
  "хорёк",
  "хохма",
  "хохол",
  "хохот",
  "хруст",
  "хунта",
  "хурма",
  "хутор",
  "цапля",
  "цапун",
  "цапфа",
  "цевьё",
  "цедра",
  "цезий",
  "центр",
  "цинга",
  "циник",
  "циста",
  "цифра",
  "цокот",
  "цукат",
  "цыган",
  "чадра",
  "чайка",
  "чалма",
  "чарка",
  "часик",
  "часть",
  "чашка",
  "чёлка",
  "чепец",
  "червь",
  "черёд",
  "череп",
  "чернь",
  "черта",
  "честь",
  "чётка",
  "чехол",
  "чечен",
  "чечет",
  "чешка",
  "чешуя",
  "чибис",
  "чижик",
  "чирей",
  "чирик",
  "число",
  "читка",
  "чрево",
  "чтиво",
  "чуваш",
  "чугун",
  "чудак",
  "чужак",
  "чуйка",
  "чукча",
  "чулан",
  "чулок",
  "чурка",
  "чутьё",
  "шабат",
  "шавка",
  "шайба",
  "шайка",
  "шакал",
  "шалаш",
  "шалун",
  "шаман",
  "шамот",
  "шапка",
  "шарик",
  "шасси",
  "шатен",
  "шатёр",
  "шатун",
  "шафер",
  "шахта",
  "шашка",
  "шваль",
  "шейка",
  "шельф",
  "шёпот",
  "шериф",
  "шесть",
  "шизик",
  "ширма",
  "шитьё",
  "шифер",
  "шихта",
  "шишка",
  "шкала",
  "шквал",
  "шкода",
  "школа",
  "шкура",
  "шланг",
  "шлейф",
  "шлюха",
  "шляпа",
  "шмель",
  "шмоль",
  "шнапс",
  "шнека",
  "шорох",
  "шоссе",
  "шофёр",
  "шпага",
  "шпала",
  "шпана",
  "шпиль",
  "шпион",
  "шпора",
  "шприц",
  "шпрот",
  "шпуля",
  "шпунт",
  "шрифт",
  "штамм",
  "штамп",
  "штаны",
  "штейн",
  "штиль",
  "штифт",
  "штора",
  "шторм",
  "штосс",
  "штраф",
  "штрих",
  "штука",
  "штурм",
  "штырь",
  "шулер",
  "шурин",
  "шурпа",
  "шуруп",
  "шуряк",
  "шутка",
  "шхуна",
  "щебет",
  "щегол",
  "щёкот",
  "щёлка",
  "щёлок",
  "щенок",
  "щепка",
  "щётка",
  "щёчка",
  "щипок",
  "щиток",
  "щупик",
  "щучка",
  "эвенк",
  "эгида",
  "эдикт",
  "эклер",
  "экран",
  "элита",
  "эмаль",
  "эммер",
  "энзим",
  "эпика",
  "эпоха",
  "эрзац",
  "эркер",
  "эскиз",
  "эстет",
  "этика",
  "этнос",
  "эфиоп",
  "югурт",
  "юдоль",
  "юзист",
  "юкола",
  "юниор",
  "юнкер",
  "юнкор",
  "юноша",
  "юрага",
  "юрист",
  "ябеда",
  "ягель",
  "ягода",
  "ягуар",
  "яичко",
  "якорь",
  "ямина",
  "ямщик",
  "ярица",
  "ярлык",
  "яруга",
  "ярыга",
  "ясень",
  "яство",
  "ястык",
  "яхонт",
];

const getWord = () => {
  const randomNumber = Math.floor(Math.random() * fiveCharWordsList.length);
  return fiveCharWordsList[randomNumber];
};

let CORRECT_WORD = getWord();

const getCurrentInput = (inputWord) => {
  let word = "";

  for (let i = 1; i < 6; i++) {
    const char = document
      .querySelector(`.word-${inputWord}`)
      .querySelector(`.char-${i}`).innerHTML;
    word += char;
  }

  return word.toLowerCase();
};

const changeCharsBackground = (input, activeInputWord) => {
  for (let i = 0; i < 5; i++) {
    const indexInHTML = i + 1;

    if (input[i] === CORRECT_WORD[i]) {
      document
        .querySelector(`.word-${activeInputWord}`)
        .querySelector(
          `.char-${indexInHTML}`
        ).className = `char char-${indexInHTML} correct-char`;

      document.getElementById(
        `Key${input[i].toUpperCase().charCodeAt(0)}`
      ).className = "letter correct-letter";
    } else if (CORRECT_WORD.includes(input[i])) {
      document
        .querySelector(`.word-${activeInputWord}`)
        .querySelector(
          `.char-${indexInHTML}`
        ).className = `char char-${indexInHTML} semi-correct-char`;

      const letterClassName = document.getElementById(
        `Key${input[i].toUpperCase().charCodeAt(0)}`
      ).className;

      if (letterClassName !== "letter correct-letter") {
        document.getElementById(
          `Key${input[i].toUpperCase().charCodeAt(0)}`
        ).className = "letter semi-correct-letter";
      }
    } else {
      document.getElementById(
        `Key${input[i].toUpperCase().charCodeAt(0)}`
      ).className = "letter missed-letter";
    }
  }
};

const setErrorInput = (activeInputWord) => {
  for (let i = 1; i < 6; i++) {
    document
      .querySelector(`.word-${activeInputWord}`)
      .querySelector(`.char-${i}`).className = `char char-${i} incorrect-char`;
  }
};

const setNonErrorInput = (activeInputWord) => {
  for (let i = 1; i < 6; i++) {
    document
      .querySelector(`.word-${activeInputWord}`)
      .querySelector(`.char-${i}`).className = `char char-${i}`;
  }
};

const clearWord = (activeInputWord) => {
  for (let i = 1; i < 6; i++) {
    const char = document
      .querySelector(`.word-${activeInputWord}`)
      .querySelector(`.char-${i}`);
    char.className = `char char-${i}`;
    char.innerHTML = "";
  }
};

let activeInputWord = 1;
let activeInputChar = 0;

let isWin = false;

let usedWord = [];

const handleKeyUp = (e) => {
  if (isWin) {
    return;
  }

  const infoBlock = document.getElementById("info");

  if (infoBlock.className.includes("show-info")) {
    infoBlock.className = "info hidden-info";
  }

  if (activeInputChar && activeInputChar < 5 && e.code === "Enter") {
    setErrorInput(activeInputWord);
    return;
  }

  if (activeInputWord <= 6 && activeInputChar > 0 && e.code === "Backspace") {
    setNonErrorInput(activeInputWord);

    document
      .querySelector(`.word-${activeInputWord}`)
      .querySelector(`.char-${activeInputChar}`).innerHTML = "";
    activeInputChar--;
  }

  if (activeInputChar === 5 && e.code === "Enter") {
    const currentInput = getCurrentInput(activeInputWord);

    if (currentInput === CORRECT_WORD) {
      changeCharsBackground(currentInput, activeInputWord);
      isWin = true;
      document.getElementById("reload").className = "reload-icon";
      return;
    }

    if (
      !usedWord.includes(currentInput) &&
      fiveCharWordsList.includes(currentInput)
    ) {
      usedWord.push(currentInput);
      changeCharsBackground(currentInput, activeInputWord);
      document.getElementById("reload").className = "reload-icon";
    } else {
      setErrorInput(activeInputWord);
      return;
    }

    document.querySelector(
      `.word-${activeInputWord}`
    ).className = `word word-${activeInputWord} word-filled`;
    activeInputWord++;
    activeInputChar = 0;
    if (activeInputWord <= 6) {
      document.querySelector(
        `.word-${activeInputWord}`
      ).className = `word word-${activeInputWord} word-active`;
    }
  }

  if (activeInputWord > 6 && !isWin) {
    document.getElementById(
      "it-was-word"
    ).innerHTML = `Загаданное слово: ${CORRECT_WORD}`;
  }

  if (activeInputWord > 6 || activeInputChar === 5) {
    return;
  }

  if (/[А-Яа-яЁё]/.test(e.key)) {
    setNonErrorInput(activeInputWord);
    activeInputChar++;
    document
      .querySelector(`.word-${activeInputWord}`)
      .querySelector(`.char-${activeInputChar}`).innerHTML =
      e.key.toUpperCase();
  }
};

const handleTouch = (key, code) => {
  handleKeyUp({ key, code });
};

setTimeout(() => {
  document.addEventListener("keyup", handleKeyUp);
}, 100);

const infoIconClick = () => {
  const infoBlock = document.getElementById("info");

  if (infoBlock.className.includes("hidden-info")) {
    infoBlock.className = "info show-info";
  } else {
    infoBlock.className = "info hidden-info";
  }
};

const reloadClick = () => {
  document.getElementById("reload").className = "reload-icon hidden-icon";
  const correctWordText = document.getElementById("it-was-word");

  if (!isWin && !correctWordText.innerHTML.includes("Загаданное")) {
    document.getElementById(
      "it-was-word"
    ).innerHTML = `Было загадано слово: ${CORRECT_WORD}`;

    setTimeout(() => {
      correctWordText.innerHTML = "";
    }, 3000);
  } else {
    correctWordText.innerHTML = "";
  }

  CORRECT_WORD = getWord();

  activeInputWord = 1;
  activeInputChar = 0;
  isWin = false;
  usedWord = [];

  for (let i = 1; i < 7; i++) {
    setNonErrorInput(i);
    clearWord(i);
    document.querySelector(`.word-${i}`).className = `word word-${i}${
      i === 1 ? " word-active" : ""
    }`;
  }

  const letters = document.getElementsByClassName("letter");

  for (let i = 0; i < letters.length; i++) {
    const element = letters.item(i);

    if (!element.className.includes("mobile-letter")) {
      element.className = "letter";
    }
  }
};
