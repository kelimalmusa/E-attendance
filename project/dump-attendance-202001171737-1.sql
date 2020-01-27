PGDMP     !    %                 x         
   attendance     12.1 (Ubuntu 12.1-1.pgdg18.04+1)     12.1 (Ubuntu 12.1-1.pgdg18.04+1) 0    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16460 
   attendance    DATABASE     |   CREATE DATABASE attendance WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'tr_TR.UTF-8' LC_CTYPE = 'tr_TR.UTF-8';
    DROP DATABASE attendance;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16476    ders    TABLE     @  CREATE TABLE public.ders (
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
       public         heap    postgres    false    3            �            1259    16474    ders_ders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ders_ders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.ders_ders_id_seq;
       public          postgres    false    3    205            �           0    0    ders_ders_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.ders_ders_id_seq OWNED BY public.ders.ders_id;
          public          postgres    false    204            �            1259    16524    devamsizlik    TABLE     �   CREATE TABLE public.devamsizlik (
    id integer NOT NULL,
    ogr_id integer,
    ders_id integer,
    tweet_id integer,
    islem_location character varying,
    islem_tarih character varying
);
    DROP TABLE public.devamsizlik;
       public         heap    postgres    false    3            �            1259    16522    devamsizlik_id_seq    SEQUENCE     �   CREATE SEQUENCE public.devamsizlik_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.devamsizlik_id_seq;
       public          postgres    false    211    3            �           0    0    devamsizlik_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.devamsizlik_id_seq OWNED BY public.devamsizlik.id;
          public          postgres    false    210            �            1259    16487    hoca    TABLE     �   CREATE TABLE public.hoca (
    hoca_id integer NOT NULL,
    hoca_name character varying,
    hoca_surname character varying,
    hoca_title character varying
);
    DROP TABLE public.hoca;
       public         heap    postgres    false    3            �            1259    16485    hoca_hoca_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hoca_hoca_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.hoca_hoca_id_seq;
       public          postgres    false    207    3            �           0    0    hoca_hoca_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.hoca_hoca_id_seq OWNED BY public.hoca.hoca_id;
          public          postgres    false    206            �            1259    16463    ogrenci    TABLE       CREATE TABLE public.ogrenci (
    ogr_id integer NOT NULL,
    ogr_no integer,
    ogr_name character varying,
    ogr_surname character varying,
    ogr_ogrenim_turu character varying,
    ogr_user_id character varying,
    ogr_username character varying
);
    DROP TABLE public.ogrenci;
       public         heap    postgres    false    3            �            1259    16461    ogrenci_ogr_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ogrenci_ogr_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.ogrenci_ogr_id_seq;
       public          postgres    false    3    203            �           0    0    ogrenci_ogr_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.ogrenci_ogr_id_seq OWNED BY public.ogrenci.ogr_id;
          public          postgres    false    202            �            1259    16503    tweet    TABLE     p   CREATE TABLE public.tweet (
    id integer NOT NULL,
    tweet json,
    ogr_id integer,
    ders_id integer
);
    DROP TABLE public.tweet;
       public         heap    postgres    false    3            �            1259    16501    tweet_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tweet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.tweet_id_seq;
       public          postgres    false    3    209            �           0    0    tweet_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.tweet_id_seq OWNED BY public.tweet.id;
          public          postgres    false    208            5           2604    16479    ders ders_id    DEFAULT     l   ALTER TABLE ONLY public.ders ALTER COLUMN ders_id SET DEFAULT nextval('public.ders_ders_id_seq'::regclass);
 ;   ALTER TABLE public.ders ALTER COLUMN ders_id DROP DEFAULT;
       public          postgres    false    204    205    205            8           2604    16527    devamsizlik id    DEFAULT     p   ALTER TABLE ONLY public.devamsizlik ALTER COLUMN id SET DEFAULT nextval('public.devamsizlik_id_seq'::regclass);
 =   ALTER TABLE public.devamsizlik ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            6           2604    16490    hoca hoca_id    DEFAULT     l   ALTER TABLE ONLY public.hoca ALTER COLUMN hoca_id SET DEFAULT nextval('public.hoca_hoca_id_seq'::regclass);
 ;   ALTER TABLE public.hoca ALTER COLUMN hoca_id DROP DEFAULT;
       public          postgres    false    206    207    207            4           2604    16466    ogrenci ogr_id    DEFAULT     p   ALTER TABLE ONLY public.ogrenci ALTER COLUMN ogr_id SET DEFAULT nextval('public.ogrenci_ogr_id_seq'::regclass);
 =   ALTER TABLE public.ogrenci ALTER COLUMN ogr_id DROP DEFAULT;
       public          postgres    false    202    203    203            7           2604    16506    tweet id    DEFAULT     d   ALTER TABLE ONLY public.tweet ALTER COLUMN id SET DEFAULT nextval('public.tweet_id_seq'::regclass);
 7   ALTER TABLE public.tweet ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208    209            �          0    16476    ders 
   TABLE DATA           �   COPY public.ders (ders_id, ders_code, ders_name, ders_sube, ders_haftalik_saat, ders_uygulama, ders_baslangic_saat, ders_hoca_id, ders_salon) FROM stdin;
    public          postgres    false    205            �          0    16524    devamsizlik 
   TABLE DATA           a   COPY public.devamsizlik (id, ogr_id, ders_id, tweet_id, islem_location, islem_tarih) FROM stdin;
    public          postgres    false    211            �          0    16487    hoca 
   TABLE DATA           L   COPY public.hoca (hoca_id, hoca_name, hoca_surname, hoca_title) FROM stdin;
    public          postgres    false    207            �          0    16463    ogrenci 
   TABLE DATA           u   COPY public.ogrenci (ogr_id, ogr_no, ogr_name, ogr_surname, ogr_ogrenim_turu, ogr_user_id, ogr_username) FROM stdin;
    public          postgres    false    203            �          0    16503    tweet 
   TABLE DATA           ;   COPY public.tweet (id, tweet, ogr_id, ders_id) FROM stdin;
    public          postgres    false    209            �           0    0    ders_ders_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.ders_ders_id_seq', 1, false);
          public          postgres    false    204            �           0    0    devamsizlik_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.devamsizlik_id_seq', 1, false);
          public          postgres    false    210            �           0    0    hoca_hoca_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.hoca_hoca_id_seq', 1, false);
          public          postgres    false    206            �           0    0    ogrenci_ogr_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.ogrenci_ogr_id_seq', 1, false);
          public          postgres    false    202            �           0    0    tweet_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.tweet_id_seq', 1, false);
          public          postgres    false    208            >           2606    16484    ders ders_pk 
   CONSTRAINT     O   ALTER TABLE ONLY public.ders
    ADD CONSTRAINT ders_pk PRIMARY KEY (ders_id);
 6   ALTER TABLE ONLY public.ders DROP CONSTRAINT ders_pk;
       public            postgres    false    205            D           2606    16532    devamsizlik devamsizlik_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.devamsizlik
    ADD CONSTRAINT devamsizlik_pk PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.devamsizlik DROP CONSTRAINT devamsizlik_pk;
       public            postgres    false    211            @           2606    16495    hoca hoca_pk 
   CONSTRAINT     O   ALTER TABLE ONLY public.hoca
    ADD CONSTRAINT hoca_pk PRIMARY KEY (hoca_id);
 6   ALTER TABLE ONLY public.hoca DROP CONSTRAINT hoca_pk;
       public            postgres    false    207            :           2606    16471    ogrenci ogrenci_pk 
   CONSTRAINT     T   ALTER TABLE ONLY public.ogrenci
    ADD CONSTRAINT ogrenci_pk PRIMARY KEY (ogr_id);
 <   ALTER TABLE ONLY public.ogrenci DROP CONSTRAINT ogrenci_pk;
       public            postgres    false    203            <           2606    16473    ogrenci ogrenci_un 
   CONSTRAINT     O   ALTER TABLE ONLY public.ogrenci
    ADD CONSTRAINT ogrenci_un UNIQUE (ogr_id);
 <   ALTER TABLE ONLY public.ogrenci DROP CONSTRAINT ogrenci_un;
       public            postgres    false    203            B           2606    16511    tweet tweet_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.tweet
    ADD CONSTRAINT tweet_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.tweet DROP CONSTRAINT tweet_pk;
       public            postgres    false    209            E           2606    16496    ders ders_fk    FK CONSTRAINT     t   ALTER TABLE ONLY public.ders
    ADD CONSTRAINT ders_fk FOREIGN KEY (ders_hoca_id) REFERENCES public.hoca(hoca_id);
 6   ALTER TABLE ONLY public.ders DROP CONSTRAINT ders_fk;
       public          postgres    false    2880    207    205            H           2606    16533    devamsizlik devamsizlik_fk    FK CONSTRAINT     ~   ALTER TABLE ONLY public.devamsizlik
    ADD CONSTRAINT devamsizlik_fk FOREIGN KEY (ogr_id) REFERENCES public.ogrenci(ogr_id);
 D   ALTER TABLE ONLY public.devamsizlik DROP CONSTRAINT devamsizlik_fk;
       public          postgres    false    203    211    2874            I           2606    16538    devamsizlik devamsizlik_fk_1    FK CONSTRAINT        ALTER TABLE ONLY public.devamsizlik
    ADD CONSTRAINT devamsizlik_fk_1 FOREIGN KEY (ders_id) REFERENCES public.ders(ders_id);
 F   ALTER TABLE ONLY public.devamsizlik DROP CONSTRAINT devamsizlik_fk_1;
       public          postgres    false    205    2878    211            J           2606    16543    devamsizlik devamsizlik_fk_2    FK CONSTRAINT     |   ALTER TABLE ONLY public.devamsizlik
    ADD CONSTRAINT devamsizlik_fk_2 FOREIGN KEY (tweet_id) REFERENCES public.tweet(id);
 F   ALTER TABLE ONLY public.devamsizlik DROP CONSTRAINT devamsizlik_fk_2;
       public          postgres    false    2882    211    209            F           2606    16512    tweet tweet_fk    FK CONSTRAINT     r   ALTER TABLE ONLY public.tweet
    ADD CONSTRAINT tweet_fk FOREIGN KEY (ogr_id) REFERENCES public.ogrenci(ogr_id);
 8   ALTER TABLE ONLY public.tweet DROP CONSTRAINT tweet_fk;
       public          postgres    false    203    209    2874            G           2606    16517    tweet tweet_fk_1    FK CONSTRAINT     s   ALTER TABLE ONLY public.tweet
    ADD CONSTRAINT tweet_fk_1 FOREIGN KEY (ders_id) REFERENCES public.ders(ders_id);
 :   ALTER TABLE ONLY public.tweet DROP CONSTRAINT tweet_fk_1;
       public          postgres    false    2878    205    209            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     