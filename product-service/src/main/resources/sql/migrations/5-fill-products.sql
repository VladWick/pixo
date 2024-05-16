-- 1
INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    AMOUNT_IN_STOCK,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID,
    IMAGE_LINK
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Милая игрушка',
    'Мягкая милая игрушка, которую можно подарить детям и любимым',
    700,
    2,
    CURRENT_DATE,
    CURRENT_DATE,
    5,
    null,
    true,
    null,
    'https://cdn.lifehacker.ru/wp-content/uploads/2020/01/Snimok-ekrana-2020-01-15-v-19.50.14_1579103425-e1579103511455.png'
);

-- 2
INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    AMOUNT_IN_STOCK,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID,
    IMAGE_LINK
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Самодельная машина "Nitro 1905"',
    'Деревянный макет машины образца 1905 года. Коллекционная.',
    17000,
    2,
    CURRENT_DATE,
    CURRENT_DATE,
    11,
    null,
    true,
    null,
    'https://i.pinimg.com/564x/d8/a4/fa/d8a4fadabe8dbc031593df65b41984fb.jpg'
);

-- 3
INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    IMAGE_LINK,
    AMOUNT_IN_STOCK,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Мягкая игрушка "Лисичка"',
    'Мягкая и пушистая игрушка, которая станет лучшим другом для детей и взрослых.',
    950,
    2,
    'https://i.pinimg.com/474x/0f/ca/cc/0fcacc4630504db7155a04012e6f635b.jpg',
    21,
    CURRENT_DATE,
    CURRENT_DATE,
    null,
    true,
    null
);

-- 4
INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    IMAGE_LINK,
    AMOUNT_IN_STOCK,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Пушистая игрушка "Незнайка"',
    'Плюшевый компаньон, который подарит тепло и уют в любой день.',
    1950,
    2,
    'https://static.insales-cdn.com/images/collections/1/888/89105272/large_%D0%A1%D1%87%D0%B0%D1%81%D1%82%D1%8C%D0%B5-%D0%97%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5-%D0%A3%D0%B4%D0%B0%D1%87%D0%B01.jpg',
    21,
    CURRENT_DATE,
    CURRENT_DATE,
    null,
    true,
    null
);

-- 5
INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    IMAGE_LINK,
    AMOUNT_IN_STOCK,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Глинянный кувшин',
    'Самодельный глинянный кувшин. Высококачественная работа мастера',
    2950,
    2,
    'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1653899576/lmcode/ZqhJEvWj-UC-t0T0W2wwqw/90381135_04.jpg',
    211,
    CURRENT_DATE,
    CURRENT_DATE,
    null,
    true,
    null
);

-- 6 (1)
INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    IMAGE_LINK,
    AMOUNT_IN_STOCK,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Статуэтка "Купидон"',
    'Статуэтка "Купидон" - это очаровательное и романтичное произведение искусства, которое станет прекрасным украшением для любого дома или сада. Изображающий крылатого бога любви, Купидона, этот изящный предмет изготовлен из высококачественной смолы и расписан вручную с исключительной детализацией.',
    22050,
    3,
    'https://antikzone.ru/img/cms/%D0%BA%D1%83%D0%BF%D0%B8%D0%B4%D0%BE%D0%BD.jpg',
    1,
    CURRENT_DATE,
    CURRENT_DATE,
    null,
    true,
    null
);

-- 7 (2)
INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    IMAGE_LINK,
    AMOUNT_IN_STOCK,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Бронзовая статуэтка "Вергилий"',
    'Бронзовая статуэтка "Вергилий" - это изысканное и величественное произведение искусства, которое станет ценным дополнением к любой коллекции или домашнему декору. Изображающий знаменитого римского поэта, Вергилия, эта статуэтка изготовлена из высококачественной бронзы и отлита с использованием традиционного метода литья по выплавляемым моделям.',
    52050,
    3,
    'https://antikzone.ru/img/cms/Articles/Small/%D0%91%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%8D%D1%82%D0%BA%D0%B0%20%D0%92%D0%B8%D1%80%D0%B3%D0%B8%D0%BB%D0%B8%D0%B9%201.jpg',
    1,
    CURRENT_DATE,
    CURRENT_DATE,
    null,
    true,
    null
);

-- 8 (3)
INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    IMAGE_LINK,
    AMOUNT_IN_STOCK,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Старинные золотые часы',
    'Циферблат часов выполнен из фарфора или эмали и может быть украшен изящной росписью, драгоценными камнями или замысловатыми узорами. Корпус часов может быть круглым, квадратным или овальным, а его поверхность часто украшена гравировкой, чеканкой или эмалью.',
    11950,
    3,
    'https://p0.zoon.ru/preview/wPIAHuZ5rr43LlKkXKCNKA/630x384x85/1/6/0/original_57d754ce40c0882a298c8e21_6266cb02cb03b7.08474055.jpg',
    1,
    CURRENT_DATE,
    CURRENT_DATE,
    null,
    true,
    null
);

-- 9 (1)
INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    IMAGE_LINK,
    AMOUNT_IN_STOCK,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Редкая коллекционная книга "Советский ветер"',
    '"Советский ветер" - это редкая и ценная коллекционная книга, которая погружает читателей в захватывающую эпоху советской истории. Написанная выдающимся автором, эта книга предлагает уникальный взгляд на политические, социальные и культурные аспекты СССР.',
    2000,
    4,
    'https://www.chukotka-museum.ru/upload/iblock/c5d/c5d70c16daceb2a388351efcb1819adb.JpG',
    1,
    CURRENT_DATE,
    CURRENT_DATE,
    null,
    true,
    null
);

-- 1
-- безделушка
--

INSERT INTO PRODUCTS(
    ID,
    TITLE,
    DESCRIPTION,
    PRICE,
    CATEGORY_ID,
    IMAGE_LINK,
    AMOUNT_IN_STOCK,
    CREATE_DATE,
    LAST_UPDATE_DATE,
    SELLER_ID,
    IS_CONFIRM_FOR_SALE,
    IMAGE_ID
) VALUES (
    nextval('SEQ_PRODUCTS'),
    'Монета 10 рублей',
    'Редкая монета времён царской России. 10 рублей на те времена',
    12050,
    1,
    'https://cdn.monetnik.ru/storage/blog/9re17ub633/redkie-10-rublej-rf-003.800.jpg',
    3,
    CURRENT_DATE,
    CURRENT_DATE,
    null,
    true,
    null
);


