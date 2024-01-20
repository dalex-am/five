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
  "актер",
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
  "амеба",
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
  "белье",
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
  "битье",
  "благо",
  "блажь",
  "бланк",
  "блеск",
  "близь",
  "блоха",
  "блуза",
  "блюдо",
  "бляха",
  "бобер",
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
  "взлет",
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
  "ворье",
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
  "голье",
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
  "греза",
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
  "дележ",
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
  "дрема",
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
  "дутик",
  "дутыш",
  "духан",
  "душка",
  "дуэль",
  "дылда",
  "дымка",
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
  "ершик",
  "есаул",
  "жажда",
  "жатва",
  "желоб",
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
  "жилье",
  "жираф",
  "житие",
  "житье",
  "жница",
  "жокей",
  "жрица",
  "жулик",
  "жулье",
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
  "залет",
  "залив",
  "залог",
  "залом",
  "замах",
  "замес",
  "замер",
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
  "зачес",
  "зачет",
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
  "карма",
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
  "ковер",
  "ковка",
  "кожух",
  "козел",
  "койка",
  "койот",
  "кокон",
  "кокос",
  "колба",
  "колея",
  "колик",
  "колли",
  "колос",
  "колун",
  "колье",
  "кольт",
  "комар",
  "комик",
  "комод",
  "комок",
  "конек",
  "конец",
  "конус",
  "конюх",
  "копир",
  "копия",
  "копка",
  "копна",
  "копье",
  "кореш",
  "корка",
  "короб",
  "кость",
  "косяк",
  "котел",
  "кофта",
  "кочан",
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
  "кулек",
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
  "кутеж",
  "кутья",
  "кухня",
  "кучер",
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
  "ларек",
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
  "ликер",
  "лилия",
  "лимит",
  "лимон",
  "лимфа",
  "линза",
  "линия",
  "лирик",
  "литер",
  "литье",
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
  "лузер",
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
  "малек",
  "малец",
  "малыш",
  "маляр",
  "мамба",
  "манга",
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
  "метла",
  "метод",
  "метро",
  "мечта",
  "мешок",
  "мидия",
  "мизер",
  "минер",
  "минор",
  "минус",
  "миома",
  "мираж",
  "миска",
  "митоз",
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
  "морок",
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
  "мудак",
  "мужик",
  "музей",
  "мулат",
  "мулла",
  "муляж",
  "мумие",
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
  "мытье",
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
  "налет",
  "налив",
  "налим",
  "налог",
  "намаз",
  "намек",
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
  "начес",
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
  "норма",
  "норов",
  "носик",
  "носка",
  "носок",
  "нужда",
  "нутро",
  "нырок",
  "нытик",
  "нытье",
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
  "облет",
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
  "объем",
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
  "опция",
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
  "осетр",
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
  "отлет",
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
  "отчет",
  "отчим",
  "отъем",
  "офсет",
  "охват",
  "охота",
  "очерк",
  "ощупь",
  "падеж",
  "падеж",
  "пайка",
  "пакет",
  "пакля",
  "палас",
  "палач",
  "палец",
  "палка",
  "панда",
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
  "пенек",
  "пение",
  "пенис",
  "пенни",
  "пенье",
  "пепел",
  "перед",
  "перец",
  "перст",
  "песец",
  "песик",
  "песнь",
  "песня",
  "песто",
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
  "питье",
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
  "позем",
  "позер",
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
  "полет",
  "полив",
  "полип",
  "полис",
  "полка",
  "полог",
  "полоз",
  "полом",
  "полюс",
  "поляк",
  "помет",
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
  "почет",
  "почин",
  "почка",
  "почта",
  "пошив",
  "поэма",
  "право",
  "праща",
  "пресс",
  "прием",
  "прима",
  "принц",
  "приют",
  "проба",
  "проем",
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
  "пьянь",
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
  "рамен",
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
  "ружье",
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
  "рывок",
  "рыжик",
  "рынок",
  "рысак",
  "рытье",
  "рычаг",
  "рэкет",
  "рюмка",
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
  "сапер",
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
  "семга",
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
  "ступа",
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
  "сырье",
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
  "тезка",
  "теизм",
  "теист",
  "текст",
  "телец",
  "телик",
  "телка",
  "тембр",
  "тенор",
  "тепло",
  "терем",
  "терка",
  "тесак",
  "тесто",
  "тесть",
  "тетка",
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
  "упрек",
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
  "учеба",
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
  "фарси",
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
  "хорек",
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
  "цевье",
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
  "челка",
  "чепец",
  "червь",
  "черед",
  "череп",
  "чернь",
  "черта",
  "честь",
  "четка",
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
  "чутье",
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
  "шатер",
  "шатун",
  "шафер",
  "шахта",
  "шашка",
  "шваль",
  "шейка",
  "шельф",
  "шепот",
  "шериф",
  "шесть",
  "шизик",
  "ширма",
  "шитье",
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
  "шорох",
  "шорты",
  "шоссе",
  "шофер",
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
  "щекот",
  "щелка",
  "щелок",
  "щенок",
  "щепка",
  "щетка",
  "щечка",
  "щипок",
  "щиток",
  "щупик",
  "эвенк",
  "эгида",
  "эдикт",
  "эклер",
  "экран",
  "элита",
  "эмаль",
  "эммер",
  "энзим",
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

const cringeWords = [
  "курва",
  "бебра",
  "мемас",
  "калич",
  "калик",
  "ряяяя",
  "нихуя",
  "похуй",
  "адын!",
  "игого",
  "нигга",
  "сорян",
  "пжлст",
  "павук",
  "йопта",
  "мемес",
  "ъуууъ",
  "ололо",
  "блять",
  "блядь",
  "пизда",
  "ебать",
  "фуфел",
  "ботан",
  "факап",
  "расия",
  "чувак",
  "рэпер",
  "сосис",
  "рсфср",
  "стопэ",
  "сучка",
  "итачи",
  "саске",
  "пивко",
  "харош",
  "ебака",
  "мдауж",
  "5букв",
  "инста",
  "гелик",
  "ааааа",
  "агонь",
  "челик",
  "аоаоа",
  "хуета",
  "говно",
  "бблгм",
  "борат",
  "писюн",
  "банан",
  "хуйня",
  "негры",
  "пидор",
  "дырка",
  "сосок",
  "чмоня",
  "жопик",
  "капец",
  "ебало",
  "хуета",
  "уебан",
  "псина",
  "срака",
  "фимоз",
  "ебашь",
  "шлюха",
  "понил",
  "питух",
  "пипец",
];

const allWords = [...cringeWords, ...fiveCharWordsList];

const enToRuConfig = {
  q: "й",
  w: "ц",
  e: "у",
  r: "к",
  t: "е",
  y: "н",
  u: "г",
  i: "ш",
  o: "щ",
  p: "з",
  "[": "х",
  "]": "ъ",
  a: "ф",
  s: "ы",
  d: "в",
  f: "а",
  g: "п",
  h: "р",
  j: "о",
  k: "л",
  l: "д",
  ";": "ж",
  "'": "э",
  z: "я",
  x: "ч",
  c: "с",
  v: "м",
  b: "и",
  n: "т",
  m: "ь",
  ",": "б",
  ".": "ю",
};

const normalWin = {
  1: "👏🏻",
  2: "🎉",
  3: "🧠",
};
const normalLose = {
  1: "🤯",
  2: "🫠",
  3: "😪",
};

const cringeWin = {
  1: "./icons/cringeWin1.svg",
  2: "./icons/cringeWin2.svg",
  3: "./icons/cringeWin3.svg",
};
const cringeLose = {
  1: "./icons/cringeLose1.svg",
  2: "./icons/cringeLose2.svg",
  3: "./icons/cringeLose3.svg",
};

const enToRu = (char) => enToRuConfig[char.toLowerCase()];

const getWord = (isRofl = false) => {
  const array = isRofl ? cringeWords : fiveCharWordsList;
  const randomNumber = Math.floor(Math.random() * array.length);
  console.log("array[randomNumber]", array[randomNumber]);
  return array[randomNumber];
};

const randomInteger = (max = 3) => {
  const rand = 1 + Math.random() * max;
  return Math.floor(rand);
};

const getFlagButton = () => document.getElementById("flag");
const getBurgerButton = () => document.getElementById("burger-icon");
const getLogo = () => document.getElementById("logo");
const getCloseButton = () => document.getElementById("close-icon");
const getInfoBlock = () => document.getElementById("info");
const getWordBlock = () => document.getElementById("it-was-word");
const getLetter = (char) =>
  document.getElementById(`Key${char.toUpperCase().charCodeAt(0)}`);
const getWordByIndex = (index) => document.querySelector(`.word-${index}`);
const getCharInWord = (wordIndex, charIndex) =>
  document
    .querySelector(`.word-${wordIndex}`)
    .querySelector(`.char-${charIndex}`);

let CORRECT_WORD = getWord();
let activeInputWord = 1;
let activeInputChar = 0;
let isWinOrGiveUp = false;
let usedWord = [];
let isRofl = false;

const getCurrentInput = (inputWord) => {
  let word = "";

  for (let i = 1; i < 6; i++) {
    const char = getCharInWord(inputWord, i).innerHTML;
    word += char;
  }

  return word.toLowerCase();
};

const changeCharsBackground = (input, activeInputWord) => {
  for (let i = 0; i < 5; i++) {
    const indexInHTML = i + 1;

    if (input[i] === CORRECT_WORD[i]) {
      getCharInWord(
        activeInputWord,
        indexInHTML
      ).className = `char char-${indexInHTML} correct-char`;

      getLetter(input[i]).className = "letter correct-letter";
    } else if (CORRECT_WORD.includes(input[i])) {
      getCharInWord(
        activeInputWord,
        indexInHTML
      ).className = `char char-${indexInHTML} semi-correct-char`;

      const letterClassName = document.getElementById(
        `Key${input[i].toUpperCase().charCodeAt(0)}`
      ).className;

      if (letterClassName !== "letter correct-letter") {
        getLetter(input[i]).className = "letter semi-correct-letter";
      }
    } else {
      getLetter(input[i]).className = "letter missed-letter";
    }
  }
};

const setErrorInput = (activeInputWord) => {
  for (let i = 1; i < 6; i++) {
    getCharInWord(
      activeInputWord,
      i
    ).className = `char char-${i} incorrect-char`;
  }
};

const setNonErrorInput = (activeInputWord) => {
  for (let i = 1; i < 6; i++) {
    getCharInWord(activeInputWord, i).className = `char char-${i}`;
  }
};

const clearWord = (activeInputWord) => {
  for (let i = 1; i < 6; i++) {
    const char = getCharInWord(activeInputWord, i);
    char.className = `char char-${i}`;
    char.innerHTML = "";
  }
};

const hideInfo = () => {
  getInfoBlock().classList.add("hidden");
  getBurgerButton().classList.remove("hidden");
  getLogo().classList.remove("hidden");
  getCloseButton().classList.add("hidden");
};

const setResult = (win) => {
  const keyboardsRows = document.getElementsByClassName("letter-row");
  for (let i = 0; i < 3; i++) {
    const row = keyboardsRows.item(i);
    row.classList.add("hidden");
  }

  const resultBlock = document.getElementById("result");
  const resultIcon = document.getElementById("result-icon");

  const winObj = isRofl ? cringeWin : normalWin;
  const loseObj = isRofl ? cringeLose : normalLose;

  resultBlock.classList.remove("hidden");
  const random = randomInteger(
    Object.keys(win ? winObj : loseObj).keys().length
  );

  if (!isRofl) {
    resultIcon.innerHTML = win ? normalWin[random] : normalLose[random];
  } else {
    resultIcon.innerHTML = win
      ? `<img src="${cringeWin[random]}" alt="Ничёси!">`
      : `<img src="${cringeLose[random]}" alt="Ничёси!">`;
  }

  if (!win) {
    getWordBlock().innerHTML = isRofl
      ? `Это же слово «${CORRECT_WORD}»!`
      : `Загаданное слово: ${CORRECT_WORD}`;
  } else {
    getWordBlock().innerHTML = isRofl ? "" : `Вы угадали слово!`;
  }
};

const checkWord = () => {
  const currentInput = getCurrentInput(activeInputWord);

  if (currentInput === CORRECT_WORD) {
    changeCharsBackground(currentInput, activeInputWord);
    isWinOrGiveUp = true;
    getFlagButton().className = "flag-icon";
    setResult(true);
    return;
  }

  const array = isRofl ? allWords : fiveCharWordsList;

  if (!usedWord.includes(currentInput) && array.includes(currentInput)) {
    usedWord.push(currentInput);
    changeCharsBackground(currentInput, activeInputWord);
    getFlagButton().className = "flag-icon";
  } else {
    setErrorInput(activeInputWord);
    return;
  }

  getWordByIndex(
    activeInputWord
  ).className = `word word-${activeInputWord} word-filled`;
  activeInputWord++;
  activeInputChar = 0;
  if (activeInputWord <= 6) {
    getWordByIndex(
      activeInputWord
    ).className = `word word-${activeInputWord} word-active`;
  }

  if (activeInputWord > 6 && !isWinOrGiveUp) {
    setResult(false);
  }
};

const handleKeyUp = (e) => {
  if (isWinOrGiveUp || !getCloseButton().classList.contains("hidden")) {
    return;
  }

  if (activeInputChar && activeInputChar < 5 && e.code === "Enter") {
    setErrorInput(activeInputWord);
    return;
  }

  if (activeInputWord <= 6 && activeInputChar > 0 && e.code === "Backspace") {
    setNonErrorInput(activeInputWord);

    getCharInWord(activeInputWord, activeInputChar).innerHTML = " ";
    activeInputChar--;
  }

  if (activeInputWord > 6 || activeInputChar === 5) {
    return;
  }

  const isEnglish = Object.keys(enToRuConfig).includes(e.key.toLowerCase());

  if (/[А-Яа-я]/.test(e.key) || isEnglish) {
    setNonErrorInput(activeInputWord);
    activeInputChar++;
    getCharInWord(activeInputWord, activeInputChar).innerHTML = isEnglish
      ? enToRu(e.key).toUpperCase()
      : e.key.toUpperCase();
  }

  if (activeInputChar === 5) {
    checkWord();
  }
};

const handleTouch = (key, code) => {
  handleKeyUp({ key, code });
};

const burgerIconClick = () => {
  getInfoBlock().classList.remove("hidden");
  getBurgerButton().classList.add("hidden");
  getLogo().classList.add("hidden");
  getFlagButton().classList.add("hidden");
  getCloseButton().classList.remove("hidden");
};

const closeIconClick = () => {
  getInfoBlock().classList.add("hidden");
  getBurgerButton().classList.remove("hidden");
  getFlagButton().classList.remove("hidden");
  getLogo().classList.remove("hidden");
  getCloseButton().classList.add("hidden");
};

const reloadClick = (isHideInfo = true) => {
  if (isHideInfo) {
    hideInfo();
  }

  getFlagButton().classList.add("hidden-icon");

  const keyboardsRows = document.getElementsByClassName("letter-row");
  for (let i = 0; i < 3; i++) {
    const row = keyboardsRows.item(i);
    row.classList.remove("hidden");
  }

  const resultBlock = document.getElementById("result");

  resultBlock.classList.add("hidden");

  CORRECT_WORD = getWord(isRofl);

  activeInputWord = 1;
  activeInputChar = 0;
  isWinOrGiveUp = false;
  usedWord = [];

  for (let i = 1; i < 7; i++) {
    setNonErrorInput(i);
    clearWord(i);
    getWordByIndex(i).className = `word word-${i}${
      i === 1 ? " word-active" : ""
    }`;
  }

  const letters = document.getElementsByClassName("letter");

  for (let i = 0; i < letters.length; i++) {
    const element = letters.item(i);

    if (!element.className.includes("backspace-letter")) {
      element.className = "letter";
    }
  }
};

const flagClick = () => {
  if (isWinOrGiveUp) {
    return;
  }

  hideInfo();
  const isMobile = document.body.clientWidth < document.body.clientHeight;
  isMobile && getFlagButton().classList.add("hidden-icon");
  isWinOrGiveUp = true;
  setResult(false);
};

const roflSwitch = () => {
  isRofl = !isRofl;
  reloadClick(false);
};

setTimeout(() => {
  document.addEventListener("keyup", handleKeyUp);
}, 100);
