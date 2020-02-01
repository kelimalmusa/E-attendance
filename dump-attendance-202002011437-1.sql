PGDMP     $    %                x         
   attendance     12.1 (Ubuntu 12.1-1.pgdg18.04+1)     12.1 (Ubuntu 12.1-1.pgdg18.04+1) 4    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16385 
   attendance    DATABASE     |   CREATE DATABASE attendance WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'tr_TR.UTF-8' LC_CTYPE = 'tr_TR.UTF-8';
    DROP DATABASE attendance;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16387    ders    TABLE     @  CREATE TABLE public.ders (
    ders_id integer NOT NULL,
    ders_code character varying,
    ders_name character varying,
    ders_sube character varying,
    ders_haftalik_saat integer,
    ders_uygulama boolean,
    ders_baslangic_saat character varying,
    ders_hoca_id integer,
    ders_salon character varying
);
    DROP TABLE public.ders;
       public         heap    postgres    false    3            �            1259    16393    ders_ders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ders_ders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.ders_ders_id_seq;
       public          postgres    false    202    3            �           0    0    ders_ders_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.ders_ders_id_seq OWNED BY public.ders.ders_id;
          public          postgres    false    203            �            1259    16395    devamsizlik    TABLE     �   CREATE TABLE public.devamsizlik (
    id integer NOT NULL,
    ogr_id bigint,
    ders_id bigint,
    tweet_id bigint,
    islem_location character varying,
    islem_tarih character varying
);
    DROP TABLE public.devamsizlik;
       public         heap    postgres    false    3            �            1259    16401    devamsizlik_id_seq    SEQUENCE     �   CREATE SEQUENCE public.devamsizlik_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.devamsizlik_id_seq;
       public          postgres    false    204    3            �           0    0    devamsizlik_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.devamsizlik_id_seq OWNED BY public.devamsizlik.id;
          public          postgres    false    205            �            1259    16403    hoca    TABLE       CREATE TABLE public.hoca (
    hoca_id integer NOT NULL,
    hoca_name character varying,
    hoca_surname character varying,
    hoca_title character varying,
    hoca_username character varying,
    hoca_email character varying,
    hoca_password character varying
);
    DROP TABLE public.hoca;
       public         heap    postgres    false    3            �            1259    16409    hoca_hoca_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hoca_hoca_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.hoca_hoca_id_seq;
       public          postgres    false    206    3            �           0    0    hoca_hoca_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.hoca_hoca_id_seq OWNED BY public.hoca.hoca_id;
          public          postgres    false    207            �            1259    16411    ogrenci    TABLE     R  CREATE TABLE public.ogrenci (
    ogr_id integer NOT NULL,
    ogr_no character varying,
    ogr_name character varying,
    ogr_surname character varying,
    ogr_ogrenim_turu character varying,
    ogr_user_id character varying,
    ogr_username character varying,
    ogr_password character varying,
    ogr_email character varying
);
    DROP TABLE public.ogrenci;
       public         heap    postgres    false    3            �            1259    16632    ogrenci_kayit    TABLE     �   CREATE TABLE public.ogrenci_kayit (
    id integer NOT NULL,
    ogr_id bigint,
    ders_id bigint,
    kayit_tarih character varying
);
 !   DROP TABLE public.ogrenci_kayit;
       public         heap    postgres    false    3            �            1259    16630    ogrenci_kayit_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ogrenci_kayit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.ogrenci_kayit_id_seq;
       public          postgres    false    3    213            �           0    0    ogrenci_kayit_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.ogrenci_kayit_id_seq OWNED BY public.ogrenci_kayit.id;
          public          postgres    false    212            �            1259    16417    ogrenci_ogr_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ogrenci_ogr_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.ogrenci_ogr_id_seq;
       public          postgres    false    208    3            �           0    0    ogrenci_ogr_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.ogrenci_ogr_id_seq OWNED BY public.ogrenci.ogr_id;
          public          postgres    false    209            �            1259    16419    tweet    TABLE     ~   CREATE TABLE public.tweet (
    id integer NOT NULL,
    tweet json,
    ogr_id bigint,
    ders_id bigint,
    tarih text
);
    DROP TABLE public.tweet;
       public         heap    postgres    false    3            �            1259    16425    tweet_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tweet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.tweet_id_seq;
       public          postgres    false    210    3            �           0    0    tweet_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.tweet_id_seq OWNED BY public.tweet.id;
          public          postgres    false    211            ;           2604    16427    ders ders_id    DEFAULT     l   ALTER TABLE ONLY public.ders ALTER COLUMN ders_id SET DEFAULT nextval('public.ders_ders_id_seq'::regclass);
 ;   ALTER TABLE public.ders ALTER COLUMN ders_id DROP DEFAULT;
       public          postgres    false    203    202            <           2604    16574    devamsizlik id    DEFAULT     p   ALTER TABLE ONLY public.devamsizlik ALTER COLUMN id SET DEFAULT nextval('public.devamsizlik_id_seq'::regclass);
 =   ALTER TABLE public.devamsizlik ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204            =           2604    16429    hoca hoca_id    DEFAULT     l   ALTER TABLE ONLY public.hoca ALTER COLUMN hoca_id SET DEFAULT nextval('public.hoca_hoca_id_seq'::regclass);
 ;   ALTER TABLE public.hoca ALTER COLUMN hoca_id DROP DEFAULT;
       public          postgres    false    207    206            >           2604    16430    ogrenci ogr_id    DEFAULT     p   ALTER TABLE ONLY public.ogrenci ALTER COLUMN ogr_id SET DEFAULT nextval('public.ogrenci_ogr_id_seq'::regclass);
 =   ALTER TABLE public.ogrenci ALTER COLUMN ogr_id DROP DEFAULT;
       public          postgres    false    209    208            @           2604    16635    ogrenci_kayit id    DEFAULT     t   ALTER TABLE ONLY public.ogrenci_kayit ALTER COLUMN id SET DEFAULT nextval('public.ogrenci_kayit_id_seq'::regclass);
 ?   ALTER TABLE public.ogrenci_kayit ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213            ?           2604    16431    tweet id    DEFAULT     d   ALTER TABLE ONLY public.tweet ALTER COLUMN id SET DEFAULT nextval('public.tweet_id_seq'::regclass);
 7   ALTER TABLE public.tweet ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210            �          0    16387    ders 
   TABLE DATA           �   COPY public.ders (ders_id, ders_code, ders_name, ders_sube, ders_haftalik_saat, ders_uygulama, ders_baslangic_saat, ders_hoca_id, ders_salon) FROM stdin;
    public          postgres    false    202            �          0    16395    devamsizlik 
   TABLE DATA           a   COPY public.devamsizlik (id, ogr_id, ders_id, tweet_id, islem_location, islem_tarih) FROM stdin;
    public          postgres    false    204            �          0    16403    hoca 
   TABLE DATA           v   COPY public.hoca (hoca_id, hoca_name, hoca_surname, hoca_title, hoca_username, hoca_email, hoca_password) FROM stdin;
    public          postgres    false    206            �          0    16411    ogrenci 
   TABLE DATA           �   COPY public.ogrenci (ogr_id, ogr_no, ogr_name, ogr_surname, ogr_ogrenim_turu, ogr_user_id, ogr_username, ogr_password, ogr_email) FROM stdin;
    public          postgres    false    208            �          0    16632    ogrenci_kayit 
   TABLE DATA           I   COPY public.ogrenci_kayit (id, ogr_id, ders_id, kayit_tarih) FROM stdin;
    public          postgres    false    213            �          0    16419    tweet 
   TABLE DATA           B   COPY public.tweet (id, tweet, ogr_id, ders_id, tarih) FROM stdin;
    public          postgres    false    210            �           0    0    ders_ders_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.ders_ders_id_seq', 3, true);
          public          postgres    false    203            �           0    0    devamsizlik_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.devamsizlik_id_seq', 133, true);
          public          postgres    false    205            �           0    0    hoca_hoca_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.hoca_hoca_id_seq', 5, true);
          public          postgres    false    207            �           0    0    ogrenci_kayit_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.ogrenci_kayit_id_seq', 17, true);
          public          postgres    false    212            �           0    0    ogrenci_ogr_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.ogrenci_ogr_id_seq', 37, true);
          public          postgres    false    209            �           0    0    tweet_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.tweet_id_seq', 791, true);
          public          postgres    false    211            B           2606    16433    ders ders_pk 
   CONSTRAINT     O   ALTER TABLE ONLY public.ders
    ADD CONSTRAINT ders_pk PRIMARY KEY (ders_id);
 6   ALTER TABLE ONLY public.ders DROP CONSTRAINT ders_pk;
       public            postgres    false    202            D           2606    16576    devamsizlik devamsizlik_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.devamsizlik
    ADD CONSTRAINT devamsizlik_pk PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.devamsizlik DROP CONSTRAINT devamsizlik_pk;
       public            postgres    false    204            F           2606    16437    hoca hoca_pk 
   CONSTRAINT     O   ALTER TABLE ONLY public.hoca
    ADD CONSTRAINT hoca_pk PRIMARY KEY (hoca_id);
 6   ALTER TABLE ONLY public.hoca DROP CONSTRAINT hoca_pk;
       public            postgres    false    206            P           2606    16640    ogrenci_kayit ogrenci_kayit_pk 
   CONSTRAINT     \   ALTER TABLE ONLY public.ogrenci_kayit
    ADD CONSTRAINT ogrenci_kayit_pk PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.ogrenci_kayit DROP CONSTRAINT ogrenci_kayit_pk;
       public            postgres    false    213            H           2606    16439    ogrenci ogrenci_pk 
   CONSTRAINT     T   ALTER TABLE ONLY public.ogrenci
    ADD CONSTRAINT ogrenci_pk PRIMARY KEY (ogr_id);
 <   ALTER TABLE ONLY public.ogrenci DROP CONSTRAINT ogrenci_pk;
       public            postgres    false    208            J           2606    16441    ogrenci ogrenci_un 
   CONSTRAINT     O   ALTER TABLE ONLY public.ogrenci
    ADD CONSTRAINT ogrenci_un UNIQUE (ogr_id);
 <   ALTER TABLE ONLY public.ogrenci DROP CONSTRAINT ogrenci_un;
       public            postgres    false    208            L           2606    16498    ogrenci ogrenci_un2 
   CONSTRAINT     P   ALTER TABLE ONLY public.ogrenci
    ADD CONSTRAINT ogrenci_un2 UNIQUE (ogr_no);
 =   ALTER TABLE ONLY public.ogrenci DROP CONSTRAINT ogrenci_un2;
       public            postgres    false    208            N           2606    16443    tweet tweet_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.tweet
    ADD CONSTRAINT tweet_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.tweet DROP CONSTRAINT tweet_pk;
       public            postgres    false    210            Q           2606    16444    ders ders_fk    FK CONSTRAINT     t   ALTER TABLE ONLY public.ders
    ADD CONSTRAINT ders_fk FOREIGN KEY (ders_hoca_id) REFERENCES public.hoca(hoca_id);
 6   ALTER TABLE ONLY public.ders DROP CONSTRAINT ders_fk;
       public          postgres    false    202    2886    206            R           2606    16577    devamsizlik devamsizlik_fk_1    FK CONSTRAINT        ALTER TABLE ONLY public.devamsizlik
    ADD CONSTRAINT devamsizlik_fk_1 FOREIGN KEY (ders_id) REFERENCES public.ders(ders_id);
 F   ALTER TABLE ONLY public.devamsizlik DROP CONSTRAINT devamsizlik_fk_1;
       public          postgres    false    202    2882    204            �   y   x�3�t:������P���Ј�)3'=�8�2�H�����Ģ#99M9�8����l''C.#�tq���2�tvt�642j(�,�MU(��J-��4ttt�4AR�����X|d#W� P�/}      �     x�m�=N1���{
+-h5�͟�G@�C��A�*TT(w�!���n�G/#
���E
hj�	&I�@�>H�EI��p��s��T�>����
U�.�	��ƪ ��h���h6��ob�M��?H?�nm�g�P�f�k"��A)��=�����*��ْH����P�QG.~�W6��f����~}de���>��>�&0U�P[��Y�Χ�[�|J&���U�%%t�k�yd�g4w�fD�_�(~�3^�����ǋ��y|��y��i�+���      �   w   x�3�tLJ)��I�Pp-�H��t��v�t�t)�S8<��|5�2�8�3$�����X���q����+�KM)�+)�442�2�t��M-Qp,�L�t�L9�1��=`c� �˄n0���1z\\\ ��j�      �   �   x���M
�0FדSx�L����K��g�&h��AH�:�� �{�T�5��{o�L"�
�9JNP쬺�`��/�<Z�@0-*c��������-�=���}E�+rLa�+mG�����Ls��Wa�s���#��s(֑���:Y��N�9�H�zs�$Uo_��?�n�y�W�ݑ9�k�(9���ӗ@�9�|�s
 9���=�](�$�a m���k��2��$���1� ��      �   �   x���M
!�^�����U�s�sT���I����՝��_�:�
��b�6�`�C���؉}��JS��2]r��f^�u�u��Q���j���_M]����_�&%H��V�y|oQ��)(��vKA�1�c���iqXUˮ�^*ŝJCŝ�C��*C�F��{�t	      �      x���r�F����S�4�a��;��篢e)�d]l9���łHH�ċ�q���a�����z����}��4( $H��}��ž��8�}>�9��b?����]g��`��y��{NϠ�0���j��n�?���ܬlz�MH�D����VJ	��3���&R�DB����n�߶�ϏNeF{0�	j��`�ٯ�=����gB�����J�����M�7��l���l;A{�\���9nuܨ�~����%1+��O*��m����)�a�~������I�8��<'l7�KbsI�eR+���\%x��Ĭ06n�π:�����`k���^Bϻհ@u����[���_�z���uus���G뾉`�6�Gg�v�n:���W������ÖE�?n�^De��X������u58�aP͐��M�?��_�퍫���c�ݍ^�=��_>0����}W��*M���i4H��}Q�Ĩ(5�e/��.t�N�$�XXRZ;�鎟NKB�颟>}��f��T�&��R��uN�8����w9t.�F���E���fXs�4�{�M���[��~S'��1ھ{���:��ж�{��Ӫ�;��^J��ѥ{��~���������q������?��?C�l��M�1�7F說�7�t��z�@�&g׽�z�f {��k���;��5�s��Ķl���6I�N�jn:���/���{��&��fL!�Ӈ�	6����BY�&Jey�M�kA�ܟ�-����?p���n4����KIU��{��DiĨ�z�O�K��'Þq���ͻ&`/W����������Q�����F��"p���۸��&�|��a�s�;�{Æ_�w��.�X?F/>j�Q��B�r�H�����pЇ�NZ��������Y�0��J0�^�m�;��K����;#"�D2�x]=�˪�X�Au�v�����_n]zM��E[��񘏳3:�\�a%��l!LEle����l˳#��]���ae�_�SO(�<~й����On
����L�t�0�%��cMv���DLK��r��;~�����rῌr�3)���b��F:�e�X.L�����%(���"q_a"�-����}A����J��7z�(�߆n0hz���0G�[0I���x���e�S��[�(���A[zN�0z=X��
����JӪpsK1xM�{\�XA#Q�JԞn4��;^�7)sy�;��-I��Li+΍��F�H:Q�Z��[W���Ow�iu�^�i8�;�����ִFV^�};+�;��߾����!��-���9��ۆ�!��k���	��Gb�:���^j�~�'8�{�U���S���_8ق�(,��ҹm���:=��8��~�`�����ӧ�>ٲ��oC���U��l����b��ޑ�4ُ���t�����t� 6�ߣ)0�oB����B��!u7���p��=k0� ����2�Z\���-�Rp���p|�oT������Z�q�Xn%'zFf�r�+$]g�����Fzq<,�3Ymd�Lb��q&Qt����q�n�e��a��;z�,��}�4��y�%	%�H����T�\Y�Z�i6N���}��u�z�;��0I�h��N�x�����ޭ�d�LI��mQ�Z �6s���-���hxL����|g���X#�Mﲠ�p��� �Fe�X2P�9����--�y��5��5����s?�O&v�p�>h��!4&��d��qJX2��9ڍ����xTgf2N�<![[^�2y~�Le�y�8�Y��K��l�w�N�j9r4��;���Cl��p~~r:�3-�q���HB�) v�BS楃FjKAG�Q3�䯑�'+�q>�n(�����m�h�6�	^�*��cB0ۄu���8�Km���z�:g;'��ƺ��sK���(�^�hZǷ�ON��;��}P�h��� ��h�M��DS�EJy�^�k�Db����m���fF��
j6�zZR�`�z����_'�TX̴9e�S�hr�M��"��۫�����ƾӾu���o��>���H:)�I�~r�ff
��*<gvF}xi�� v�[5aFmeb4e|~����� m���wŮ�[/$��7���,��%�f¶M:�eZ�kp�\��[�I�*���iY%z��9�q�D�}����ֽ��4=%G!s�(�^����	gC)+��(��lcZ*��*N-)O+w�\f�B&�~��]�瞮�a �I�{9�elA����^��o�vY6��61��*l�hi��iy���g"�&�&4�EcZ4�EcZ4�Ec��Ę����RB$-eL֬D��1��`L�lJ���.���p�p�8�p�Ҵ>҄p�p�p�p�p�p�p�p�p�8Ş��aOSʘ��<�i:ɝ���������^��~/`����$���p�����4�ox��9Ymd�Lb��q&Qt�9hw����?��>�1���g�2���=��7}L`J��׾��#y_0$��MQ�P�
�	�xIpL�i	K(�8�czΰ�tAD��w�����-�qa���>M��Np
u�8�P�7���������V�lڽ�n��z����$,;��?�릧�����m^CO�0���C��+eBi]���4�R����nY3E�ƨ�gR��y�R�B�׫_­�;���,�K��-%�ɔPf�۾:���OK����S��E�J83��C�;	��Nv���̊x^�_������}���B�p�����=t��.�g���R��>K��3 ?��@CK�$ah���1�����RZ
]lׂ�1����ZJI-���0��B�Z7���RZ
CKah)-���0��Ӆ��EWѰ������ӽ�4�U���8W�b&z��ow������D��Ӓ��n�L�*{�S���3�^�ܺ�OyRmd�����WaEgPaOܮ����;��=1y�ע3�T�����EiBiB��'4&�6׾��}�8-b�Pʌ���X'&�����&g������yq��jsn��d�����w~��K��|��WS31���v�$�_���'Z��H%�x���êQ�&bF�$�`Shjz��Mj���wG�<ܼ����,�۳7�*��x����]}�|P����)ϲ�x�㒦�;�y=�e�7���٘��s������!���*:>�$��'ԬD���wq��l���Z�>ߜ"��
������L���D�fFT�x.+v���~ֽ����by��QBq���I.Gw�����m�yW�8*��11����(��qTB$�{�J�9�7Q�P��|�7�|�7�|�7�|s��ӄ���]X=�)(�BR&M�2"�F�4�N�g��N����ꝭQ�,�lB��a��*K-����k�]�~���Ua3��Pa����&�.��&E��B�懷���#u�=V��"

�:�AB&B&B&B&B&B&���h�p6�B&B&B�j�
��������	���3��j�� �H�Q���O�r�������W�|�����$�7��^Nr�xl���;�����^W�ۍ�*lF*lb��U�Dђ���a��k)_����f4�����N�r߰���ĸ�7�f"7�G�L9��i��s+�5+Q{�V�ne���'�e�����H4��(I��$dcdcdcdcdcdcdcdcd�U��L�)�Cc��w�gƂ�݀^�Ɖ��׈���g�r�y[(�e�:��#^��� ��h�M��D��|:�eL �y�o�8; %�n�{s�p��	�i��h�aF���P�$��a�邈����/C�[�����)J�	�A���CJ�F۽1�w���|�ʞM�W����So_?c�x�ɺ����=�BG���-�y�P�G��j����"�����Z�"k���X�U�	����t�aV�� ���-��P�RR�L	eV���#���Tޟ�9e��N)�}f
�Vv���QVe���|�QV����QVW�R����J�X����=~�1V'KE�%�$y�2�<�Re���ɾ0mIMn+��exS��%��ɞ�~͏�3�V���A`y'
0, �  u�E"W	����x+��+�_E��62��h�#Z����s� 6�n�Ư�����st̿c���4�4�)Oy(nsb[�������$1Rt��������M_��$�?�18w��B.>�����0%l�5{�*<�D<3�V�ƄA� �(sͰ�����8��A�8����FH!LEle����l˳#��ݲ� ��Ae��'S�J�E����i�e��ή��
���|l��Vm1*����b𚬹�ã����4S��ww[P�9Oם���w|�cy����'Gc8�a݃�����D�r��QX�奇�)���ӟ�ɒO�'�q>�n(E,�yܲl�RܴMFL��ȸ�$�k±���/;\�\+8�������d��F�Rڋ�Lk�M�w��?ݵoJ��������h��L�hi�ބ0�����-|g��9-�Q�P�r%	�-��R-��R-ſ%K�ɹ�iS^�PjN΍�����l'>Ź�B2F2F�A2FIZIB2F2F2F2F2F2F2F2F2^K+����t��q�������Q���wٯC?�e$'�����E/�9<���Ev��7���LF<��|�I]��H�@53ۡ�a�����2

���ۈ�6"��o#�ۈ�6��ۈ��h�p6�Ŋ�J=�D:��`B�{ ��$W;�^��>=�|s�^L���,"a*R���q��t1����j�>zq<,(�F�
��|6Q��ϔ0̠��R#��0h�R(I(I9����xZ���xZ���xZ�-�*sq�([��5+Q{x^�]�.��4~^�O���#.c�e��[`��Q��P���1�2F\ƈ�q#.c��5~��������E\h ��hω�(P�&Ph ��h ��h ��h ��©kg�5TR1��&�6K��r�m�B&zqB]�l��`ݘ�	.�ٽ�rs|�������-�eU،62T��h竰����	�X�
;�f:���XL���L�L�L�L�L�L�L�J&�&`"��DT=�4)(l�BR&M�2BFF�4�\�g��N����ꝭQ	�lB����F�0���Y��[��~���~��
��F�
��|6Qt16)�w�b��_\/��������(P(P�h�L�L�L�L�L�L�=1�4� פ���CL$(U�ZR��k'�\6������Z/<�tݘHP�,K@�{9�elA����^��o�vY6��61��*l�h�����[�_~f BiBi*�&t�[M.'�O�IbD?�N`|���~��^�h'&�I�y2�!B�]�x�O�ɰg5�)a�	U#�0��$����e+��5��E�3�_��_��EA�%��[�4���ݯ�0��i����-ώ�WwKF�yT�&S��ñ%��"'��?��4�k�ή�Y9��Z�H�T����f^��[�%�H:�gYT����,���-��$af3���x�MםͳLǇ�byگL�|j�28�a�����S���_8ق�(,��ҹm���:=��8�+t,��4O�.��]p'�����()���k?�E?�z������T=���=[78&R�d�^�ٽ�����I�qpw��j�Q�&�t8��|�I-}�^B��2� %��G��DIBIZ'��o�1�*FY�(�e�!�
(6�KAJ^�5+Q{t��,�V�)��P�Y��S�8&�8~uxZ�O\,^�Ɖ��׊��y�e>�����%	%)W��������������%6��#5m�K�1Ԝ�#�p�H�K&�)�2&�d�wҰ�2LK�4�6�&ʔ��RJ��������nN�g�_�c�L��~�K�,4ߌ^Nr����̛������I�#������h��L�hi#�iy�֌`g�c�&�&4�F�j4�F�j4�F���Ƥ�J��T�k��>7�jV��Ф�{0�^��q��|���ukcc��/�߈     