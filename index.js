const fiveCharWordsList = [
  "абака",
  "аббат",
  "абвер",
  "абзац",
  "аборт",
  "абрек",
  "абрис",
  "абхаз",
  "абцуг",
  "абшид",
  "аванс",
  "авгит",
  "авгур",
  "авеню",
  "авизо",
  "авось",
  "аврал",
  "автол",
  "автор",
  "агава",
  "агама",
  "агами",
  "агент",
  "агнат",
  "агнец",
  "аграф",
  "адепт",
  "адрес",
  "адряс",
  "ажгон",
  "азарт",
  "азиат",
  "айван",
  "аймак",
  "айран",
  "айсор",
  "акажу",
  "акант",
  "акрил",
  "аксон",
  "актёр",
  "актив",
  "акула",
  "акциз",
  "акция",
  "аларм",
  "алеут",
  "алиби",
  "алкаш",
  "аллея",
  "аллюр",
  "алмаз",
  "алтей",
  "алтын",
  "алчба",
  "алыча",
  "альфа",
  "амбар",
  "амбра",
  "амбре",
  "амвон",
  "амёба",
  "аминь",
  "ампер",
  "ампир",
  "ангар",
  "ангел",
  "анион",
  "анкер",
  "анонс",
  "антик",
  "антре",
  "анчар",
  "аншеф",
  "аорта",
  "апорт",
  "апрош",
  "арбуз",
  "аргон",
  "аргус",
  "ареал",
  "арека",
  "арена",
  "арест",
  "ариец",
  "аркан",
  "армия",
  "армяк",
  "архар",
  "архив",
  "аршин",
  "аскер",
  "аскет",
  "аспид",
  "астат",
  "астма",
  "астра",
  "асцит",
  "атака",
  "атлас",
  "атлет",
  "атолл",
  "аттик",
  "афера",
  "афиша",
  "ацтек",
  "аэроб",
  "аэрон",
  "бабка",
  "бабьё",
  "багаж",
  "багги",
  "багет",
  "багор",
  "бадан",
  "бадья",
  "базар",
  "базис",
  "байга",
  "байда",
  "байка",
  "бакан",
  "бакен",
  "бакун",
  "балда",
  "балет",
  "балка",
  "балок",
  "балык",
  "банан",
  "банда",
  "банка",
  "барак",
  "баран",
  "бареж",
  "баржа",
  "барий",
  "барин",
  "барит",
  "барич",
  "барка",
  "бармы",
  "барон",
  "барыш",
  "баска",
  "басма",
  "баснь",
  "басня",
  "басок",
  "басон",
  "батат",
  "батог",
  "батон",
  "батут",
  "батыр",
  "бахта",
  "бахча",
  "бачок",
  "башка",
  "башня",
  "бегун",
  "бедро",
  "безик",
  "бейка",
  "бекар",
  "бекас",
  "бекон",
  "белёк",
  "белец",
  "белка",
  "белок",
  "бельё",
  "беляк",
  "беляш",
  "бёрдо",
  "берег",
  "берет",
  "бетон",
  "бивак",
  "бидон",
  "бизон",
  "билет",
  "билль",
  "бином",
  "биржа",
  "бирка",
  "бирюк",
  "бирюч",
  "бисер",
  "битва",
  "биток",
  "битум",
  "битьё",
  "битюг",
  "благо",
  "блажь",
  "бланк",
  "блато",
  "блеск",
  "близь",
  "блинт",
  "блоха",
  "блуза",
  "блюдо",
  "бляха",
  "бобёр",
  "бобик",
  "бобок",
  "богач",
  "бодяк",
  "божба",
  "божок",
  "бойня",
  "бокал",
  "болид",
  "бомба",
  "бонза",
  "бонмо",
  "бонна",
  "бордо",
  "борей",
  "борец",
  "боров",
  "борок",
  "борть",
  "босяк",
  "ботва",
  "ботик",
  "бочаг",
  "бочар",
  "бочка",
  "бочок",
  "браво",
  "брага",
  "брада",
  "брань",
  "брасс",
  "бремя",
  "брешь",
  "бридж",
  "брика",
  "бриль",
  "бритт",
  "бровь",
  "бронх",
  "броня",
  "брошь",
  "брыжи",
  "брыла",
  "брюки",
  "брюхо",
  "бубен",
  "бубна",
  "бубон",
  "бугай",
  "бугор",
  "будка",
  "будра",
  "будяк",
  "букан",
  "буква",
  "букет",
  "букле",
  "букля",
  "букса",
  "булат",
  "булга",
  "булка",
  "булла",
  "бурав",
  "бурак",
  "буран",
  "бурат",
  "бурда",
  "бурка",
  "бурса",
  "бурун",
  "бурят",
  "бутан",
  "бутон",
  "бутса",
  "бутуз",
  "буфер",
  "буфет",
  "бухта",
  "быдло",
  "былка",
  "былое",
  "быльё",
  "бытие",
  "бытьё",
  "бычок",
  "бювар",
  "бювет",
  "бюкса",
  "вабик",
  "вагон",
  "вазон",
  "вакса",
  "валах",
  "валеж",
  "валёк",
  "валёр",
  "валет",
  "валец",
  "валик",
  "валка",
  "валок",
  "валуй",
  "валун",
  "валух",
  "вальс",
  "ванна",
  "ванта",
  "варан",
  "варка",
  "варок",
  "варяг",
  "ватин",
  "ватка",
  "вафля",
  "вахта",
  "вдова",
  "ведро",
  "вёдро",
  "ведун",
  "вежда",
  "векша",
  "велюр",
  "венгр",
  "венец",
  "веник",
  "венок",
  "вепрь",
  "верба",
  "вервь",
  "веред",
  "верес",
  "верея",
  "верки",
  "верфь",
  "верша",
  "весло",
  "весна",
  "весок",
  "весть",
  "ветвь",
  "ветер",
  "ветка",
  "ветла",
  "вечер",
  "вешка",
  "вещун",
  "взбег",
  "взвар",
  "взвод",
  "вздор",
  "вздох",
  "взлёт",
  "взлом",
  "взмах",
  "взмёт",
  "взмыв",
  "взнос",
  "взрез",
  "взрыв",
  "взрыд",
  "взыск",
  "видео",
  "видик",
  "видок",
  "визаж",
  "визир",
  "визит",
  "вилка",
  "вилла",
  "вилок",
  "винцо",
  "виола",
  "вираж",
  "вирус",
  "вирша",
  "виски",
  "висок",
  "вития",
  "виток",
  "витьё",
  "вихор",
  "вихрь",
  "вишня",
  "вклад",
  "влага",
  "власы",
  "внука",
  "вобла",
  "вогул",
  "водка",
  "вожак",
  "вождь",
  "вожжа",
  "возик",
  "возка",
  "возня",
  "возок",
  "война",
  "вокал",
  "волан",
  "волга",
  "волна",
  "волок",
  "волос",
  "волхв",
  "вольт",
  "вопль",
  "ворог",
  "ворон",
  "ворот",
  "ворох",
  "ворьё",
  "вотум",
  "вотяк",
  "вошка",
  "вояка",
  "впуск",
  "враки",
  "враль",
  "врата",
  "время",
  "вруша",
  "вспых",
  "всход",
  "втора",
  "вуаль",
  "вчера",
  "въезд",
  "выбой",
  "выбор",
  "вывал",
  "вывес",
  "вывих",
  "вывод",
  "вывоз",
  "выгар",
  "выгиб",
  "выгон",
  "выгул",
  "выдел",
  "выдох",
  "выдра",
  "выдув",
  "выезд",
  "выжиг",
  "выжим",
  "вызов",
  "выкат",
  "выкол",
  "выкос",
  "выкуп",
  "выкус",
  "вылаз",
  "вылет",
  "вылов",
  "вылом",
  "вымах",
  "вымор",
  "вынос",
  "выпад",
  "выпал",
  "выпар",
  "выпас",
  "выпор",
  "выпот",
  "вырез",
  "выруб",
  "высев",
  "вытьё",
  "выход",
  "вычет",
  "вышка",
  "вьюга",
  "вязка",
  "вязок",
  "вятич",
  "вятка",
  "гавот",
  "гагат",
  "газик",
  "газок",
  "газон",
  "гайка",
  "галка",
  "галоп",
  "галун",
  "гамак",
  "гамма",
  "ганец",
  "ганза",
  "ганка",
  "гараж",
  "гарда",
  "гарем",
  "гарус",
  "гаусс",
  "гашиш",
  "гвалт",
  "гейша",
  "гелий",
  "гемма",
  "гений",
  "герма",
  "герой",
  "гетра",
  "гетто",
  "гжель",
  "гибка",
  "гидра",
  "гиена",
  "гиляк",
  "гинея",
  "гипюр",
  "гирло",
  "гитан",
  "гитов",
  "гичка",
  "глава",
  "главк",
  "гладь",
  "глина",
  "глист",
  "глубь",
  "глушь",
  "глыба",
  "глясе",
  "гнейс",
  "гнида",
  "гниль",
  "гнома",
  "гнусь",
  "гобой",
  "говор",
  "гогот",
  "годик",
  "годок",
  "голец",
  "голик",
  "голод",
  "голос",
  "голыш",
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
  "горно",
  "город",
  "горох",
  "горюн",
  "гость",
  "гофре",
  "граве",
  "грамм",
  "гранд",
  "грань",
  "графа",
  "гребь",
  "грёза",
  "грена",
  "греча",
  "грива",
  "гридь",
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
  "гугня",
  "гудок",
  "гужик",
  "гузка",
  "гузно",
  "гуляш",
  "гумма",
  "гумми",
  "гумно",
  "гумус",
  "гуран",
  "гурда",
  "гурия",
  "гусак",
  "гусар",
  "гусёк",
  "гусит",
  "гусли",
  "гуцул",
  "гюрза",
  "давка",
  "дадан",
  "дамба",
  "дамка",
  "дачка",
  "дверь",
  "дебет",
  "дебил",
  "дебит",
  "дебош",
  "дебри",
  "дебют",
  "девиз",
  "девка",
  "девон",
  "дедка",
  "дедок",
  "дёжка",
  "деизм",
  "деист",
  "декан",
  "декор",
  "делёж",
  "делец",
  "демон",
  "демос",
  "денди",
  "денёк",
  "дерби",
  "дёрен",
  "дерма",
  "дерть",
  "десна",
  "десть",
  "детва",
  "детка",
  "дефис",
  "джига",
  "джинн",
  "дзета",
  "дзюдо",
  "диана",
  "диван",
  "диета",
  "дикая",
  "динар",
  "динго",
  "дичок",
  "длань",
  "длина",
  "днище",
  "добор",
  "довод",
  "догма",
  "дождь",
  "дожим",
  "дозор",
  "дойка",
  "дойна",
  "дойра",
  "докер",
  "домёк",
  "домен",
  "домер",
  "домна",
  "домра",
  "донец",
  "донка",
  "донна",
  "донор",
  "донос",
  "донце",
  "донья",
  "дорка",
  "досев",
  "доска",
  "досол",
  "досуг",
  "досыл",
  "досье",
  "дофин",
  "доход",
  "дочка",
  "дошка",
  "драга",
  "драже",
  "драка",
  "драма",
  "дрань",
  "древо",
  "дрейф",
  "дрель",
  "дрема",
  "дрёма",
  "дрена",
  "дробь",
  "дрова",
  "дрога",
  "дрожь",
  "дрозд",
  "дрофа",
  "друза",
  "друид",
  "дрянь",
  "дубец",
  "дубка",
  "дубль",
  "дубок",
  "дубьё",
  "дувал",
  "дудак",
  "дудка",
  "дудук",
  "дужка",
  "дукат",
  "думец",
  "думка",
  "дунец",
  "дунит",
  "дунст",
  "дупло",
  "дурак",
  "дурка",
  "дурра",
  "дурро",
  "дутар",
  "дутик",
  "дутыш",
  "дутьё",
  "духан",
  "душка",
  "душок",
  "дуэль",
  "дщерь",
  "дылда",
  "дымка",
  "дымок",
  "дырка",
  "дышло",
  "дюбек",
  "дюкер",
  "дюшес",
  "дятел",
  "евнух",
  "еврей",
  "егерь",
  "егоза",
  "ежиха",
  "ездка",
  "ездок",
  "елина",
  "емеля",
  "ересь",
  "ерник",
  "ёрник",
  "ёршик",
  "есаул",
  "ехида",
  "жажда",
  "жакан",
  "жакет",
  "жакоб",
  "жамка",
  "жарка",
  "жарок",
  "жатва",
  "жатка",
  "жевок",
  "желна",
  "жёлоб",
  "желть",
  "желчь",
  "жёлчь",
  "жених",
  "жёнка",
  "жеода",
  "жердь",
  "жерех",
  "жерло",
  "жесть",
  "жетон",
  "живец",
  "живот",
  "живьё",
  "жизнь",
  "жилет",
  "жилец",
  "жилка",
  "жильё",
  "жинка",
  "жираф",
  "жирок",
  "житие",
  "житьё",
  "жменя",
  "жнива",
  "жниво",
  "жница",
  "жокей",
  "жрица",
  "жулан",
  "жулик",
  "жульё",
  "жупан",
  "жупел",
  "журка",
  "жучка",
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
  "задик",
  "задок",
  "задор",
  "заеда",
  "заезд",
  "зажим",
  "зажин",
  "зажор",
  "зазор",
  "зазыв",
  "заика",
  "зайка",
  "заказ",
  "закал",
  "закат",
  "закол",
  "закон",
  "закуп",
  "закут",
  "залёт",
  "залив",
  "зализ",
  "залог",
  "залом",
  "замах",
  "замер",
  "замес",
  "замёт",
  "замок",
  "замор",
  "замша",
  "занос",
  "запад",
  "запал",
  "запас",
  "запах",
  "запев",
  "запой",
  "запон",
  "запор",
  "зарез",
  "зарод",
  "зарок",
  "заряд",
  "засев",
  "засов",
  "засол",
  "засос",
  "засыл",
  "затёк",
  "затёс",
  "затея",
  "заток",
  "затон",
  "затор",
  "заумь",
  "заход",
  "зацеп",
  "зачёс",
  "зачёт",
  "зачин",
  "защип",
  "звено",
  "звень",
  "зверь",
  "зебра",
  "зевок",
  "зелье",
  "зельц",
  "земец",
  "земля",
  "зенит",
  "зенки",
  "зерно",
  "зернь",
  "зефир",
  "зипун",
  "злато",
  "злоба",
  "злюка",
  "знамя",
  "знать",
  "зобик",
  "золка",
  "зомби",
  "зраза",
  "зубец",
  "зубик",
  "зубок",
  "зулус",
  "зурна",
  "зыбка",
  "зыбун",
  "зятёк",
  "зятик",
  "иваси",
  "ивина",
  "ивняк",
  "иврит",
  "игиль",
  "игрек",
  "игрок",
  "игрун",
  "идеал",
  "идиом",
  "идиот",
  "иерей",
  "ижица",
  "избач",
  "извет",
  "извив",
  "извод",
  "извоз",
  "изгиб",
  "изгой",
  "излёт",
  "излом",
  "измол",
  "измор",
  "износ",
  "изъян",
  "изыск",
  "изюбр",
  "икона",
  "икота",
  "илька",
  "ильма",
  "имидж",
  "инвар",
  "ингуш",
  "индий",
  "индус",
  "индюк",
  "инжир",
  "инока",
  "интим",
  "инула",
  "иония",
  "иприт",
  "ирбис",
  "ирмос",
  "искра",
  "искус",
  "ислам",
  "испод",
  "испуг",
  "иссоп",
  "истец",
  "истод",
  "исток",
  "исход",
  "иудей",
  "ишиас",
  "кабак",
  "кабан",
  "кабил",
  "кабул",
  "кавун",
  "кагал",
  "каган",
  "кагат",
  "кагор",
  "кадет",
  "кадий",
  "кадка",
  "кадык",
  "казак",
  "казан",
  "казах",
  "казна",
  "казнь",
  "казус",
  "кайен",
  "кайла",
  "кайло",
  "кайма",
  "кайра",
  "какао",
  "калан",
  "калач",
  "калий",
  "калиф",
  "калла",
  "калым",
  "камас",
  "камея",
  "камин",
  "камка",
  "камса",
  "камус",
  "камча",
  "камыш",
  "канал",
  "канат",
  "канва",
  "канон",
  "каноэ",
  "канун",
  "канюк",
  "капер",
  "капля",
  "капок",
  "капор",
  "капот",
  "каппа",
  "карат",
  "карга",
  "карда",
  "карел",
  "кариб",
  "карст",
  "карта",
  "каска",
  "касса",
  "каста",
  "катар",
  "катер",
  "катет",
  "катод",
  "каток",
  "катыш",
  "кацап",
  "качка",
  "кашка",
  "кашне",
  "кашпо",
  "кащей",
  "каюта",
  "квант",
  "кварк",
  "кварц",
  "квота",
  "кегль",
  "кегля",
  "кекур",
  "кельт",
  "келья",
  "кенар",
  "кенаф",
  "кепка",
  "кефир",
  "кивер",
  "кивок",
  "кизил",
  "кизяк",
  "кинза",
  "киник",
  "киоск",
  "кипер",
  "кирза",
  "кирка",
  "кирха",
  "кисет",
  "кисея",
  "киска",
  "киста",
  "кисть",
  "кифоз",
  "кичка",
  "кишка",
  "кладь",
  "клака",
  "класс",
  "клёкт",
  "клерк",
  "клёст",
  "клеть",
  "клика",
  "клико",
  "клипс",
  "клише",
  "клоун",
  "клуня",
  "клупп",
  "клуша",
  "клюка",
  "кляча",
  "кнель",
  "кнехт",
  "книга",
  "кникс",
  "кница",
  "князь",
  "коала",
  "кобза",
  "кобра",
  "кобыз",
  "ковач",
  "ковёр",
  "ковка",
  "кожан",
  "кожух",
  "кожьё",
  "козёл",
  "кознь",
  "козон",
  "койка",
  "койне",
  "койот",
  "кокет",
  "кокон",
  "кокор",
  "кокос",
  "колба",
  "колер",
  "колет",
  "колея",
  "колик",
  "колит",
  "колка",
  "колли",
  "колоб",
  "колок",
  "колон",
  "колос",
  "колун",
  "колча",
  "колье",
  "кольт",
  "комар",
  "комик",
  "комми",
  "комод",
  "комок",
  "конёк",
  "конец",
  "коник",
  "конка",
  "конус",
  "конюх",
  "копал",
  "копач",
  "копёр",
  "копир",
  "копия",
  "копка",
  "копна",
  "копра",
  "копун",
  "копыл",
  "копьё",
  "корда",
  "кореш",
  "корка",
  "короб",
  "корча",
  "корчь",
  "корьё",
  "коряк",
  "косач",
  "косая",
  "косец",
  "космы",
  "косок",
  "кость",
  "косьё",
  "косяк",
  "котёл",
  "котик",
  "коток",
  "кофей",
  "кофий",
  "кофта",
  "кочан",
  "кочет",
  "кочка",
  "кошка",
  "кошма",
  "кощей",
  "крага",
  "кража",
  "краля",
  "крапп",
  "краса",
  "кредо",
  "креол",
  "крепь",
  "кресс",
  "крест",
  "криль",
  "крица",
  "кроат",
  "кровь",
  "кроки",
  "кроль",
  "крона",
  "кросс",
  "кроха",
  "кроше",
  "круиз",
  "крупа",
  "круть",
  "круча",
  "кручь",
  "крыло",
  "крыса",
  "крыша",
  "кубик",
  "кубло",
  "кубок",
  "кудлы",
  "кудри",
  "кузен",
  "кузня",
  "кузов",
  "кукан",
  "кукиш",
  "кукла",
  "кукша",
  "кулак",
  "кулан",
  "кулёк",
  "кулеш",
  "кулик",
  "кулич",
  "кулон",
  "культ",
  "кумач",
  "кумжа",
  "кумир",
  "кумык",
  "кумыс",
  "кунак",
  "купаж",
  "купец",
  "купля",
  "купол",
  "купон",
  "кураж",
  "курай",
  "курец",
  "курия",
  "курка",
  "курок",
  "курья",
  "кусок",
  "кутас",
  "кутёж",
  "куток",
  "кутум",
  "кутья",
  "кухва",
  "кухня",
  "кухта",
  "кучер",
  "кучка",
  "кушак",
  "кхмер",
  "кювет",
  "кюрий",
  "кюрин",
  "лабаз",
  "лабет",
  "лаваш",
  "лавка",
  "лавра",
  "лагун",
  "ладан",
  "ладья",
  "лазер",
  "лазея",
  "лазка",
  "лазок",
  "лайба",
  "лайда",
  "лайка",
  "лакей",
  "лампа",
  "ламут",
  "ландо",
  "ланды",
  "ланка",
  "лапка",
  "лапта",
  "лапша",
  "ларго",
  "ларёк",
  "ларец",
  "ласка",
  "лассо",
  "латка",
  "латук",
  "латыш",
  "лафет",
  "лафит",
  "лачка",
  "лбина",
  "лбище",
  "левак",
  "левит",
  "левша",
  "легат",
  "легаш",
  "ледок",
  "лежак",
  "лёжка",
  "лейка",
  "лемеш",
  "лемма",
  "лемур",
  "ленок",
  "лента",
  "ленто",
  "ленца",
  "лепет",
  "лепка",
  "лепра",
  "лепта",
  "лерка",
  "леска",
  "лесок",
  "лесть",
  "лётка",
  "леток",
  "летун",
  "лешак",
  "леший",
  "лещик",
  "лиана",
  "ливан",
  "ливер",
  "лидер",
  "лизин",
  "лизис",
  "лизол",
  "лизун",
  "ликёр",
  "лилея",
  "лилия",
  "лиман",
  "лимит",
  "лимон",
  "лимфа",
  "линёк",
  "линза",
  "линия",
  "липец",
  "липка",
  "липси",
  "лирик",
  "лиска",
  "литва",
  "литер",
  "литий",
  "лития",
  "литка",
  "литьё",
  "лихач",
  "лихва",
  "лицей",
  "лишай",
  "лишек",
  "лобан",
  "лобби",
  "лобик",
  "лобок",
  "ловец",
  "ловля",
  "логик",
  "лодка",
  "ложка",
  "ложок",
  "локон",
  "ломик",
  "ломка",
  "лонжа",
  "лопух",
  "лоток",
  "лотос",
  "лохмы",
  "лоция",
  "лошак",
  "лубок",
  "лужок",
  "лузга",
  "лунит",
  "лунка",
  "лупка",
  "лучик",
  "лучок",
  "лыжня",
  "лысун",
  "лытка",
  "лычко",
  "льяло",
  "любка",
  "люнет",
  "люпин",
  "люпус",
  "люрик",
  "лютик",
  "лютня",
  "люффа",
  "лючок",
  "лягва",
  "ляжка",
  "лямка",
  "ляпис",
  "лярва",
  "ляссе",
  "ляшка",
  "магик",
  "магия",
  "магма",
  "мадам",
  "маета",
  "мажор",
  "мазар",
  "мазер",
  "мазик",
  "мазка",
  "мазло",
  "мазня",
  "мазок",
  "мазур",
  "мазут",
  "майер",
  "майка",
  "майна",
  "майор",
  "макао",
  "макет",
  "макса",
  "макси",
  "малёк",
  "малец",
  "малик",
  "малка",
  "малый",
  "малыш",
  "мальё",
  "маляр",
  "маман",
  "мамба",
  "мамбо",
  "мамка",
  "манго",
  "манеж",
  "манер",
  "мание",
  "мания",
  "манка",
  "манко",
  "манна",
  "манок",
  "манси",
  "манто",
  "манул",
  "маори",
  "марал",
  "маран",
  "марго",
  "марка",
  "марля",
  "маска",
  "масло",
  "масон",
  "масса",
  "масть",
  "матка",
  "матюг",
  "матюк",
  "мафия",
  "махан",
  "махра",
  "мачта",
  "медик",
  "медок",
  "медяк",
  "мезга",
  "мезон",
  "мекка",
  "мелок",
  "мелос",
  "менка",
  "мерин",
  "мерка",
  "месса",
  "место",
  "месть",
  "месье",
  "месяц",
  "метан",
  "метил",
  "метис",
  "метка",
  "мётка",
  "метла",
  "метод",
  "метол",
  "метро",
  "меццо",
  "мечта",
  "мешок",
  "мигач",
  "мидия",
  "мизер",
  "микст",
  "милка",
  "милок",
  "мильт",
  "мимик",
  "минёр",
  "минор",
  "минус",
  "миома",
  "мираб",
  "мираж",
  "мирза",
  "мирок",
  "мирон",
  "мирра",
  "мирта",
  "миска",
  "митоз",
  "митра",
  "мишка",
  "мишук",
  "млеко",
  "могар",
  "могол",
  "модий",
  "модус",
  "мойва",
  "мойка",
  "мойра",
  "мокко",
  "мокой",
  "мокша",
  "молва",
  "молвь",
  "молка",
  "молот",
  "молох",
  "молян",
  "моляр",
  "монах",
  "мопед",
  "морда",
  "мороз",
  "морок",
  "морцо",
  "моряк",
  "мосол",
  "мосье",
  "мотет",
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
  "рядок",
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
  "седок",
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
  "сынок",
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
  "часок",
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
  "чтица",
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
  "шажок",
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
  "шумок",
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

const CORRECT_WORD = getWord();

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

      document.getElementById(
        `Key${input[i].toUpperCase().charCodeAt(0)}`
      ).className = "letter semi-correct-letter";
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

let activeInputWord = 1;
let activeInputChar = 0;

let isWin = false;

const usedWord = [];

const handleKeyUp = (e) => {
  if (isWin) {
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
      return;
    }

    if (
      !usedWord.includes(currentInput) &&
      fiveCharWordsList.includes(currentInput)
    ) {
      usedWord.push(currentInput);
      changeCharsBackground(currentInput, activeInputWord);
    } else {
      setErrorInput(activeInputWord);
      return;
    }

    document.querySelector(
      `.word-${activeInputWord}`
    ).className = `word word-${activeInputWord}`;
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
