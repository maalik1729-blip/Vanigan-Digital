import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { S as Section } from "./Section-3En1J6fj.js";
import { ArrowLeft, Sparkles, Search, Globe, ArrowRight } from "lucide-react";
import { u as useLanguage } from "./router-Jw4K1Btz.js";
import { W as WINGS } from "./wings-CwMPnkIc.js";
import { motion, AnimatePresence } from "framer-motion";
import "@tanstack/react-query";
import "sonner";
import "zod";
const ZONE_BREAKDOWN = [
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 1,
    "constituency": "Gummidipoondi",
    "male": 122195,
    "female": 129372,
    "third_gender": 36,
    "total": 251603
  },
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 2,
    "constituency": "Ponneri",
    "male": 121221,
    "female": 127662,
    "third_gender": 34,
    "total": 248917
  },
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 3,
    "constituency": "Tiruttani",
    "male": 128642,
    "female": 131417,
    "third_gender": 25,
    "total": 260084
  },
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 4,
    "constituency": "Thiruvallur",
    "male": 121188,
    "female": 127426,
    "third_gender": 37,
    "total": 248651
  },
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 5,
    "constituency": "Poonamallee",
    "male": 176849,
    "female": 186769,
    "third_gender": 70,
    "total": 363688
  },
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 6,
    "constituency": "Avadi",
    "male": 209662,
    "female": 219035,
    "third_gender": 75,
    "total": 428772
  },
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 7,
    "constituency": "Maduravoyal",
    "male": 179602,
    "female": 184349,
    "third_gender": 80,
    "total": 364031
  },
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 8,
    "constituency": "Ambattur",
    "male": 162248,
    "female": 168175,
    "third_gender": 57,
    "total": 330480
  },
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 9,
    "constituency": "Madavaram",
    "male": 205922,
    "female": 214596,
    "third_gender": 83,
    "total": 420601
  },
  {
    "zone": "KANCHI ZONE",
    "district": "THIRUVALLUR",
    "ac_no": 10,
    "constituency": "Thiruvottiyur",
    "male": 117181,
    "female": 123289,
    "third_gender": 116,
    "total": 240586
  },
  {
    "zone": "KANCHI ZONE",
    "district": "KANCHEEPURAM",
    "ac_no": 28,
    "constituency": "Alandur",
    "male": 143839,
    "female": 152173,
    "third_gender": 40,
    "total": 296052
  },
  {
    "zone": "KANCHI ZONE",
    "district": "KANCHEEPURAM",
    "ac_no": 29,
    "constituency": "Sriperumbudur",
    "male": 181852,
    "female": 194007,
    "third_gender": 62,
    "total": 375921
  },
  {
    "zone": "KANCHI ZONE",
    "district": "KANCHEEPURAM",
    "ac_no": 36,
    "constituency": "Uthiramerur",
    "male": 118564,
    "female": 125300,
    "third_gender": 58,
    "total": 243922
  },
  {
    "zone": "KANCHI ZONE",
    "district": "KANCHEEPURAM",
    "ac_no": 37,
    "constituency": "Kancheepuram",
    "male": 133825,
    "female": 142437,
    "third_gender": 37,
    "total": 276299
  },
  {
    "zone": "KANCHI ZONE",
    "district": "CHENGALPATTU",
    "ac_no": 27,
    "constituency": "Shozhinganallur",
    "male": 262621,
    "female": 274254,
    "third_gender": 116,
    "total": 536991
  },
  {
    "zone": "KANCHI ZONE",
    "district": "CHENGALPATTU",
    "ac_no": 30,
    "constituency": "Pallavaram",
    "male": 161197,
    "female": 168996,
    "third_gender": 24,
    "total": 330217
  },
  {
    "zone": "KANCHI ZONE",
    "district": "CHENGALPATTU",
    "ac_no": 31,
    "constituency": "Tambaram",
    "male": 157580,
    "female": 166046,
    "third_gender": 51,
    "total": 323677
  },
  {
    "zone": "KANCHI ZONE",
    "district": "CHENGALPATTU",
    "ac_no": 32,
    "constituency": "Chengalpattu",
    "male": 178076,
    "female": 188267,
    "third_gender": 57,
    "total": 366400
  },
  {
    "zone": "KANCHI ZONE",
    "district": "CHENGALPATTU",
    "ac_no": 33,
    "constituency": "Thiruporur",
    "male": 140991,
    "female": 148359,
    "third_gender": 51,
    "total": 289401
  },
  {
    "zone": "KANCHI ZONE",
    "district": "CHENGALPATTU",
    "ac_no": 34,
    "constituency": "Cheyyur",
    "male": 100103,
    "female": 101934,
    "third_gender": 18,
    "total": 202055
  },
  {
    "zone": "KANCHI ZONE",
    "district": "CHENGALPATTU",
    "ac_no": 35,
    "constituency": "Madurantakam",
    "male": 103943,
    "female": 107288,
    "third_gender": 64,
    "total": 211295
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 11,
    "constituency": "Dr.Radhakrishnan\n\n  Nagar",
    "male": 93576,
    "female": 102201,
    "third_gender": 79,
    "total": 195856
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 12,
    "constituency": "Perambur",
    "male": 107995,
    "female": 114726,
    "third_gender": 71,
    "total": 222792
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 13,
    "constituency": "Kolathur",
    "male": 99607,
    "female": 107607,
    "third_gender": 37,
    "total": 207251
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 14,
    "constituency": "Villivakkam",
    "male": 76947,
    "female": 82785,
    "third_gender": 32,
    "total": 159764
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 15,
    "constituency": "Thiru-Vi-Ka-Nagar",
    "male": 85724,
    "female": 93008,
    "third_gender": 61,
    "total": 178793
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 16,
    "constituency": "Egmore",
    "male": 65677,
    "female": 69149,
    "third_gender": 53,
    "total": 134879
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 17,
    "constituency": "Royapuram",
    "male": 75870,
    "female": 81004,
    "third_gender": 57,
    "total": 156931
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 18,
    "constituency": "Harbour",
    "male": 58221,
    "female": 58620,
    "third_gender": 55,
    "total": 116896
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 19,
    "constituency": "Chepauk-Thiruvallikeni",
    "male": 79412,
    "female": 84396,
    "third_gender": 58,
    "total": 163866
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 20,
    "constituency": "Thousand Lights",
    "male": 73500,
    "female": 80343,
    "third_gender": 65,
    "total": 153908
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 21,
    "constituency": "Anna Nagar",
    "male": 87325,
    "female": 94029,
    "third_gender": 48,
    "total": 181402
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 22,
    "constituency": "Virugampakkam",
    "male": 95025,
    "female": 101461,
    "third_gender": 50,
    "total": 196536
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 23,
    "constituency": "Saidapet",
    "male": 96950,
    "female": 103685,
    "third_gender": 62,
    "total": 200697
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 24,
    "constituency": "Thiyagarayanagar",
    "male": 74682,
    "female": 80228,
    "third_gender": 33,
    "total": 154943
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 25,
    "constituency": "Mylapore",
    "male": 93017,
    "female": 101691,
    "third_gender": 23,
    "total": 194731
  },
  {
    "zone": "CHENNAI ZONE",
    "district": "CHENNAI",
    "ac_no": 26,
    "constituency": "Velachery",
    "male": 102235,
    "female": 109411,
    "third_gender": 45,
    "total": 211691
  },
  {
    "zone": "VELLORE ZONE",
    "district": "VELLORE",
    "ac_no": 40,
    "constituency": "Katpadi",
    "male": 108863,
    "female": 116914,
    "third_gender": 32,
    "total": 225809
  },
  {
    "zone": "VELLORE ZONE",
    "district": "VELLORE",
    "ac_no": 43,
    "constituency": "Vellore",
    "male": 101554,
    "female": 109460,
    "third_gender": 49,
    "total": 211063
  },
  {
    "zone": "VELLORE ZONE",
    "district": "VELLORE",
    "ac_no": 44,
    "constituency": "Anaikattu",
    "male": 113833,
    "female": 120863,
    "third_gender": 42,
    "total": 234738
  },
  {
    "zone": "VELLORE ZONE",
    "district": "VELLORE",
    "ac_no": 45,
    "constituency": "Kilvaithinankuppam",
    "male": 104458,
    "female": 108985,
    "third_gender": 8,
    "total": 213451
  },
  {
    "zone": "VELLORE ZONE",
    "district": "VELLORE",
    "ac_no": 46,
    "constituency": "Gudiyattam",
    "male": 120946,
    "female": 127547,
    "third_gender": 33,
    "total": 248526
  },
  {
    "zone": "VELLORE ZONE",
    "district": "KRISHNAGIRI",
    "ac_no": 51,
    "constituency": "Uthangarai",
    "male": 116918,
    "female": 116541,
    "third_gender": 41,
    "total": 233500
  },
  {
    "zone": "VELLORE ZONE",
    "district": "KRISHNAGIRI",
    "ac_no": 52,
    "constituency": "Bargur",
    "male": 117135,
    "female": 120197,
    "third_gender": 17,
    "total": 237349
  },
  {
    "zone": "VELLORE ZONE",
    "district": "KRISHNAGIRI",
    "ac_no": 53,
    "constituency": "Krishnagiri",
    "male": 129777,
    "female": 135200,
    "third_gender": 60,
    "total": 265037
  },
  {
    "zone": "VELLORE ZONE",
    "district": "KRISHNAGIRI",
    "ac_no": 54,
    "constituency": "Veppanahalli",
    "male": 123389,
    "female": 120449,
    "third_gender": 37,
    "total": 243875
  },
  {
    "zone": "VELLORE ZONE",
    "district": "KRISHNAGIRI",
    "ac_no": 55,
    "constituency": "Hosur",
    "male": 169099,
    "female": 169124,
    "third_gender": 72,
    "total": 338295
  },
  {
    "zone": "VELLORE ZONE",
    "district": "KRISHNAGIRI",
    "ac_no": 56,
    "constituency": "Thalli",
    "male": 12e4,
    "female": 115947,
    "third_gender": 37,
    "total": 235984
  },
  {
    "zone": "VELLORE ZONE",
    "district": "TIRUPATHUR",
    "ac_no": 47,
    "constituency": "Vaniyambadi",
    "male": 118457,
    "female": 121713,
    "third_gender": 50,
    "total": 240220
  },
  {
    "zone": "VELLORE ZONE",
    "district": "TIRUPATHUR",
    "ac_no": 48,
    "constituency": "Ambur",
    "male": 103478,
    "female": 109113,
    "third_gender": 40,
    "total": 212631
  },
  {
    "zone": "VELLORE ZONE",
    "district": "TIRUPATHUR",
    "ac_no": 49,
    "constituency": "Jolarpet",
    "male": 115656,
    "female": 118154,
    "third_gender": 20,
    "total": 233830
  },
  {
    "zone": "VELLORE ZONE",
    "district": "TIRUPATHUR",
    "ac_no": 50,
    "constituency": "Tirupattur",
    "male": 111873,
    "female": 113016,
    "third_gender": 29,
    "total": 224918
  },
  {
    "zone": "VELLORE ZONE",
    "district": "RANIPET",
    "ac_no": 38,
    "constituency": "Arakkonam",
    "male": 96982,
    "female": 102157,
    "third_gender": 26,
    "total": 199165
  },
  {
    "zone": "VELLORE ZONE",
    "district": "RANIPET",
    "ac_no": 39,
    "constituency": "Sholinghur",
    "male": 126034,
    "female": 130072,
    "third_gender": 12,
    "total": 256118
  },
  {
    "zone": "VELLORE ZONE",
    "district": "RANIPET",
    "ac_no": 41,
    "constituency": "Ranipet",
    "male": 119090,
    "female": 126719,
    "third_gender": 44,
    "total": 245853
  },
  {
    "zone": "VELLORE ZONE",
    "district": "RANIPET",
    "ac_no": 42,
    "constituency": "Arcot",
    "male": 119107,
    "female": 124429,
    "third_gender": 29,
    "total": 243565
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "DHARMAPURI",
    "ac_no": 57,
    "constituency": "Palacodu",
    "male": 119611,
    "female": 117845,
    "third_gender": 20,
    "total": 237476
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "DHARMAPURI",
    "ac_no": 58,
    "constituency": "Pennagaram",
    "male": 126763,
    "female": 119521,
    "third_gender": 9,
    "total": 246293
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "DHARMAPURI",
    "ac_no": 59,
    "constituency": "Dharmapuri",
    "male": 129393,
    "female": 128464,
    "third_gender": 82,
    "total": 257939
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "DHARMAPURI",
    "ac_no": 60,
    "constituency": "Pappireddipatti",
    "male": 127427,
    "female": 127217,
    "third_gender": 14,
    "total": 254658
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "DHARMAPURI",
    "ac_no": 61,
    "constituency": "Harur",
    "male": 121453,
    "female": 122264,
    "third_gender": 25,
    "total": 243742
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "TIRUVANNAMALAI",
    "ac_no": 62,
    "constituency": "Chengam",
    "male": 132571,
    "female": 134045,
    "third_gender": 13,
    "total": 266629
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "TIRUVANNAMALAI",
    "ac_no": 63,
    "constituency": "Tiruvannamalai",
    "male": 119784,
    "female": 127477,
    "third_gender": 48,
    "total": 247309
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "TIRUVANNAMALAI",
    "ac_no": 64,
    "constituency": "Kilpennathur",
    "male": 117840,
    "female": 121058,
    "third_gender": 15,
    "total": 238913
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "TIRUVANNAMALAI",
    "ac_no": 65,
    "constituency": "Kalasapakkam",
    "male": 114155,
    "female": 116592,
    "third_gender": 19,
    "total": 230766
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "TIRUVANNAMALAI",
    "ac_no": 66,
    "constituency": "Polur",
    "male": 114221,
    "female": 118196,
    "third_gender": 9,
    "total": 232426
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "TIRUVANNAMALAI",
    "ac_no": 67,
    "constituency": "Arani",
    "male": 123335,
    "female": 129650,
    "third_gender": 37,
    "total": 253022
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "TIRUVANNAMALAI",
    "ac_no": 68,
    "constituency": "Cheyyar",
    "male": 117159,
    "female": 121115,
    "third_gender": 9,
    "total": 238283
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "TIRUVANNAMALAI",
    "ac_no": 69,
    "constituency": "Vandavasi",
    "male": 104662,
    "female": 107144,
    "third_gender": 5,
    "total": 211811
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "KALLAKURUCHI",
    "ac_no": 77,
    "constituency": "Ulundurpettai",
    "male": 148929,
    "female": 148499,
    "third_gender": 44,
    "total": 297472
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "KALLAKURUCHI",
    "ac_no": 78,
    "constituency": "Rishivandiyam",
    "male": 135292,
    "female": 135198,
    "third_gender": 51,
    "total": 270541
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "KALLAKURUCHI",
    "ac_no": 79,
    "constituency": "Sankarapuram",
    "male": 130231,
    "female": 132859,
    "third_gender": 46,
    "total": 263136
  },
  {
    "zone": "TIRUVANNAMALAI ZONE",
    "district": "KALLAKURUCHI",
    "ac_no": 80,
    "constituency": "Kallakurichi",
    "male": 137649,
    "female": 141044,
    "third_gender": 69,
    "total": 278762
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "VILUPURAM",
    "ac_no": 70,
    "constituency": "Gingee",
    "male": 119278,
    "female": 121651,
    "third_gender": 28,
    "total": 240957
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "VILUPURAM",
    "ac_no": 71,
    "constituency": "Mailam",
    "male": 103451,
    "female": 104195,
    "third_gender": 19,
    "total": 207665
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "VILUPURAM",
    "ac_no": 72,
    "constituency": "Tindivanam",
    "male": 106762,
    "female": 110836,
    "third_gender": 11,
    "total": 217609
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "VILUPURAM",
    "ac_no": 73,
    "constituency": "Vanur",
    "male": 101938,
    "female": 106030,
    "third_gender": 16,
    "total": 207984
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "VILUPURAM",
    "ac_no": 74,
    "constituency": "Viluppuram",
    "male": 118786,
    "female": 125218,
    "third_gender": 76,
    "total": 244080
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "VILUPURAM",
    "ac_no": 75,
    "constituency": "Vikravandi",
    "male": 112050,
    "female": 115276,
    "third_gender": 29,
    "total": 227355
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "VILUPURAM",
    "ac_no": 76,
    "constituency": "Tirukkoyilur",
    "male": 121023,
    "female": 119948,
    "third_gender": 32,
    "total": 241003
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "CUDDALORE",
    "ac_no": 151,
    "constituency": "Tittakudi",
    "male": 101774,
    "female": 104992,
    "third_gender": 4,
    "total": 206770
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "CUDDALORE",
    "ac_no": 152,
    "constituency": "Vriddhachalam",
    "male": 118319,
    "female": 119495,
    "third_gender": 22,
    "total": 237836
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "CUDDALORE",
    "ac_no": 153,
    "constituency": "Neyveli",
    "male": 94505,
    "female": 94503,
    "third_gender": 16,
    "total": 189024
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "CUDDALORE",
    "ac_no": 154,
    "constituency": "Panruti",
    "male": 116476,
    "female": 123504,
    "third_gender": 68,
    "total": 240048
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "CUDDALORE",
    "ac_no": 155,
    "constituency": "Cuddalore",
    "male": 105300,
    "female": 115773,
    "third_gender": 79,
    "total": 221152
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "CUDDALORE",
    "ac_no": 156,
    "constituency": "Kurinjipadi",
    "male": 116013,
    "female": 120238,
    "third_gender": 46,
    "total": 236297
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "CUDDALORE",
    "ac_no": 157,
    "constituency": "Bhuvanagiri",
    "male": 114785,
    "female": 116164,
    "third_gender": 19,
    "total": 230968
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "CUDDALORE",
    "ac_no": 158,
    "constituency": "Chidambaram",
    "male": 112664,
    "female": 116443,
    "third_gender": 29,
    "total": 229136
  },
  {
    "zone": "VILLUPURAM ZONE",
    "district": "CUDDALORE",
    "ac_no": 159,
    "constituency": "Kattumannarkoil",
    "male": 111691,
    "female": 112864,
    "third_gender": 10,
    "total": 224565
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 81,
    "constituency": "Gangavalli",
    "male": 105720,
    "female": 111067,
    "third_gender": 7,
    "total": 216794
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 82,
    "constituency": "Attur",
    "male": 109943,
    "female": 116517,
    "third_gender": 21,
    "total": 226481
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 83,
    "constituency": "Yercaud",
    "male": 132685,
    "female": 137827,
    "third_gender": 17,
    "total": 270529
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 84,
    "constituency": "Omalur",
    "male": 148764,
    "female": 143081,
    "third_gender": 21,
    "total": 291866
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 85,
    "constituency": "Mettur",
    "male": 127853,
    "female": 125575,
    "third_gender": 17,
    "total": 253445
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 86,
    "constituency": "Edappadi",
    "male": 138709,
    "female": 135316,
    "third_gender": 29,
    "total": 274054
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 87,
    "constituency": "Sankari",
    "male": 130573,
    "female": 128075,
    "third_gender": 30,
    "total": 258678
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 88,
    "constituency": "Salem (West)",
    "male": 127131,
    "female": 128125,
    "third_gender": 64,
    "total": 255320
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 89,
    "constituency": "Salem (North)",
    "male": 114816,
    "female": 121224,
    "third_gender": 48,
    "total": 236088
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 90,
    "constituency": "Salem (South)",
    "male": 109918,
    "female": 114130,
    "third_gender": 49,
    "total": 224097
  },
  {
    "zone": "SALEM ZONE",
    "district": "SALEM",
    "ac_no": 91,
    "constituency": "Veerapandi",
    "male": 124850,
    "female": 123611,
    "third_gender": 17,
    "total": 248478
  },
  {
    "zone": "SALEM ZONE",
    "district": "NAMAKKAL",
    "ac_no": 92,
    "constituency": "Rasipuram",
    "male": 107813,
    "female": 112728,
    "third_gender": 13,
    "total": 220554
  },
  {
    "zone": "SALEM ZONE",
    "district": "NAMAKKAL",
    "ac_no": 93,
    "constituency": "Senthamangalam",
    "male": 111214,
    "female": 116087,
    "third_gender": 26,
    "total": 227327
  },
  {
    "zone": "SALEM ZONE",
    "district": "NAMAKKAL",
    "ac_no": 94,
    "constituency": "Namakkal",
    "male": 113217,
    "female": 122093,
    "third_gender": 41,
    "total": 235351
  },
  {
    "zone": "SALEM ZONE",
    "district": "NAMAKKAL",
    "ac_no": 95,
    "constituency": "Paramathi-Velur",
    "male": 97727,
    "female": 105830,
    "third_gender": 10,
    "total": 203567
  },
  {
    "zone": "SALEM ZONE",
    "district": "NAMAKKAL",
    "ac_no": 96,
    "constituency": "Tiruchengodu",
    "male": 100412,
    "female": 106475,
    "third_gender": 41,
    "total": 206928
  },
  {
    "zone": "SALEM ZONE",
    "district": "NAMAKKAL",
    "ac_no": 97,
    "constituency": "Kumarapalayam",
    "male": 104916,
    "female": 112239,
    "third_gender": 69,
    "total": 217224
  },
  {
    "zone": "SALEM ZONE",
    "district": "ERODE",
    "ac_no": 98,
    "constituency": "Erode (East)",
    "male": 84202,
    "female": 91989,
    "third_gender": 37,
    "total": 176228
  },
  {
    "zone": "SALEM ZONE",
    "district": "ERODE",
    "ac_no": 99,
    "constituency": "Erode (West)",
    "male": 118206,
    "female": 127246,
    "third_gender": 41,
    "total": 245493
  },
  {
    "zone": "SALEM ZONE",
    "district": "ERODE",
    "ac_no": 100,
    "constituency": "Modakkurichi",
    "male": 98532,
    "female": 107577,
    "third_gender": 13,
    "total": 206122
  },
  {
    "zone": "SALEM ZONE",
    "district": "ERODE",
    "ac_no": 103,
    "constituency": "Perundurai",
    "male": 101851,
    "female": 110225,
    "third_gender": 8,
    "total": 212084
  },
  {
    "zone": "SALEM ZONE",
    "district": "ERODE",
    "ac_no": 104,
    "constituency": "Bhavani",
    "male": 108203,
    "female": 113170,
    "third_gender": 20,
    "total": 221393
  },
  {
    "zone": "SALEM ZONE",
    "district": "ERODE",
    "ac_no": 105,
    "constituency": "Anthiyur",
    "male": 100339,
    "female": 105371,
    "third_gender": 27,
    "total": 205737
  },
  {
    "zone": "SALEM ZONE",
    "district": "ERODE",
    "ac_no": 106,
    "constituency": "Gobichettipalayam",
    "male": 113378,
    "female": 124190,
    "third_gender": 13,
    "total": 237581
  },
  {
    "zone": "SALEM ZONE",
    "district": "ERODE",
    "ac_no": 107,
    "constituency": "Bhavanisagar",
    "male": 113755,
    "female": 121806,
    "third_gender": 23,
    "total": 235584
  },
  {
    "zone": "COVAI ZONE",
    "district": "NILGIRIS",
    "ac_no": 108,
    "constituency": "Udhagamandalam",
    "male": 89066,
    "female": 98348,
    "third_gender": 11,
    "total": 187425
  },
  {
    "zone": "COVAI ZONE",
    "district": "NILGIRIS",
    "ac_no": 109,
    "constituency": "Gudalur",
    "male": 89206,
    "female": 94675,
    "third_gender": 7,
    "total": 183888
  },
  {
    "zone": "COVAI ZONE",
    "district": "NILGIRIS",
    "ac_no": 110,
    "constituency": "Coonoor",
    "male": 83045,
    "female": 92768,
    "third_gender": 7,
    "total": 175820
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 111,
    "constituency": "Mettuppalayam",
    "male": 133022,
    "female": 146382,
    "third_gender": 34,
    "total": 279438
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 116,
    "constituency": "Sulur",
    "male": 145987,
    "female": 157452,
    "third_gender": 102,
    "total": 303541
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 117,
    "constituency": "Kavundampalayam",
    "male": 198430,
    "female": 208963,
    "third_gender": 114,
    "total": 407507
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 118,
    "constituency": "Coimbatore (North)",
    "male": 143383,
    "female": 148122,
    "third_gender": 28,
    "total": 291533
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 119,
    "constituency": "Thondamuthur",
    "male": 138968,
    "female": 148371,
    "third_gender": 103,
    "total": 287442
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 120,
    "constituency": "Coimbatore (South)",
    "male": 90214,
    "female": 96263,
    "third_gender": 32,
    "total": 186509
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 121,
    "constituency": "Singanallur",
    "male": 128758,
    "female": 137277,
    "third_gender": 23,
    "total": 266058
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 122,
    "constituency": "Kinathukadavu",
    "male": 144562,
    "female": 155888,
    "third_gender": 36,
    "total": 300486
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 123,
    "constituency": "Pollachi",
    "male": 96061,
    "female": 105919,
    "third_gender": 35,
    "total": 202015
  },
  {
    "zone": "COVAI ZONE",
    "district": "COIMBATORE",
    "ac_no": 124,
    "constituency": "Valparai",
    "male": 81504,
    "female": 90759,
    "third_gender": 21,
    "total": 172284
  },
  {
    "zone": "COVAI ZONE",
    "district": "TIRUPPUR",
    "ac_no": 101,
    "constituency": "Dharapuram",
    "male": 106142,
    "female": 114593,
    "third_gender": 8,
    "total": 220743
  },
  {
    "zone": "COVAI ZONE",
    "district": "TIRUPPUR",
    "ac_no": 102,
    "constituency": "Kangayam",
    "male": 103784,
    "female": 112849,
    "third_gender": 13,
    "total": 216646
  },
  {
    "zone": "COVAI ZONE",
    "district": "TIRUPPUR",
    "ac_no": 112,
    "constituency": "Avanashi",
    "male": 119841,
    "female": 130496,
    "third_gender": 9,
    "total": 250346
  },
  {
    "zone": "COVAI ZONE",
    "district": "TIRUPPUR",
    "ac_no": 113,
    "constituency": "Tiruppur (North)",
    "male": 152351,
    "female": 157662,
    "third_gender": 125,
    "total": 310138
  },
  {
    "zone": "COVAI ZONE",
    "district": "TIRUPPUR",
    "ac_no": 114,
    "constituency": "Tiruppur (South)",
    "male": 94579,
    "female": 99011,
    "third_gender": 24,
    "total": 193614
  },
  {
    "zone": "COVAI ZONE",
    "district": "TIRUPPUR",
    "ac_no": 115,
    "constituency": "Palladam",
    "male": 156069,
    "female": 166429,
    "third_gender": 32,
    "total": 322530
  },
  {
    "zone": "COVAI ZONE",
    "district": "TIRUPPUR",
    "ac_no": 125,
    "constituency": "Udumalaipettai",
    "male": 109103,
    "female": 119396,
    "third_gender": 25,
    "total": 228524
  },
  {
    "zone": "COVAI ZONE",
    "district": "TIRUPPUR",
    "ac_no": 126,
    "constituency": "Madathukulam",
    "male": 102309,
    "female": 110417,
    "third_gender": 16,
    "total": 212742
  },
  {
    "zone": "TRICHY ZONE",
    "district": "KARUR",
    "ac_no": 134,
    "constituency": "Aravakurichi",
    "male": 92738,
    "female": 101763,
    "third_gender": 4,
    "total": 194505
  },
  {
    "zone": "TRICHY ZONE",
    "district": "KARUR",
    "ac_no": 135,
    "constituency": "Karur",
    "male": 106684,
    "female": 119859,
    "third_gender": 41,
    "total": 226584
  },
  {
    "zone": "TRICHY ZONE",
    "district": "KARUR",
    "ac_no": 136,
    "constituency": "Krishnarayapuram",
    "male": 98262,
    "female": 103794,
    "third_gender": 31,
    "total": 202087
  },
  {
    "zone": "TRICHY ZONE",
    "district": "KARUR",
    "ac_no": 137,
    "constituency": "Kulithalai",
    "male": 108343,
    "female": 113638,
    "third_gender": 7,
    "total": 221988
  },
  {
    "zone": "TRICHY ZONE",
    "district": "TIRUCHIRAPALLI",
    "ac_no": 138,
    "constituency": "Manapparai",
    "male": 131212,
    "female": 134798,
    "third_gender": 9,
    "total": 266019
  },
  {
    "zone": "TRICHY ZONE",
    "district": "TIRUCHIRAPALLI",
    "ac_no": 139,
    "constituency": "Srirangam",
    "male": 137694,
    "female": 146120,
    "third_gender": 48,
    "total": 283862
  },
  {
    "zone": "TRICHY ZONE",
    "district": "TIRUCHIRAPALLI",
    "ac_no": 140,
    "constituency": "Tiruchirappalli\n\n  (West)",
    "male": 113050,
    "female": 122817,
    "third_gender": 36,
    "total": 235903
  },
  {
    "zone": "TRICHY ZONE",
    "district": "TIRUCHIRAPALLI",
    "ac_no": 141,
    "constituency": "Tiruchirappalli\n\n  (East)",
    "male": 104883,
    "female": 112460,
    "third_gender": 54,
    "total": 217397
  },
  {
    "zone": "TRICHY ZONE",
    "district": "TIRUCHIRAPALLI",
    "ac_no": 142,
    "constituency": "Thiruverumbur",
    "male": 124328,
    "female": 131860,
    "third_gender": 51,
    "total": 256239
  },
  {
    "zone": "TRICHY ZONE",
    "district": "TIRUCHIRAPALLI",
    "ac_no": 143,
    "constituency": "Lalgudi",
    "male": 102156,
    "female": 108861,
    "third_gender": 26,
    "total": 211043
  },
  {
    "zone": "TRICHY ZONE",
    "district": "TIRUCHIRAPALLI",
    "ac_no": 144,
    "constituency": "Manachanallur",
    "male": 113256,
    "female": 120924,
    "third_gender": 37,
    "total": 234217
  },
  {
    "zone": "TRICHY ZONE",
    "district": "TIRUCHIRAPALLI",
    "ac_no": 145,
    "constituency": "Musiri",
    "male": 103631,
    "female": 108965,
    "third_gender": 16,
    "total": 212612
  },
  {
    "zone": "TRICHY ZONE",
    "district": "TIRUCHIRAPALLI",
    "ac_no": 146,
    "constituency": "Thuraiyur",
    "male": 101144,
    "female": 107837,
    "third_gender": 30,
    "total": 209011
  },
  {
    "zone": "TRICHY ZONE",
    "district": "PERAMBALUR",
    "ac_no": 147,
    "constituency": "Perambalur",
    "male": 139914,
    "female": 148507,
    "third_gender": 28,
    "total": 288449
  },
  {
    "zone": "TRICHY ZONE",
    "district": "PERAMBALUR",
    "ac_no": 148,
    "constituency": "Kunnam",
    "male": 131720,
    "female": 134959,
    "third_gender": 3,
    "total": 266682
  },
  {
    "zone": "TRICHY ZONE",
    "district": "PUDUKOTTAI",
    "ac_no": 178,
    "constituency": "Gandarvakkottai",
    "male": 98028,
    "female": 96695,
    "third_gender": 9,
    "total": 194732
  },
  {
    "zone": "TRICHY ZONE",
    "district": "PUDUKOTTAI",
    "ac_no": 179,
    "constituency": "Viralimalai",
    "male": 110011,
    "female": 113040,
    "third_gender": 33,
    "total": 223084
  },
  {
    "zone": "TRICHY ZONE",
    "district": "PUDUKOTTAI",
    "ac_no": 180,
    "constituency": "Pudukkottai",
    "male": 109962,
    "female": 113943,
    "third_gender": 23,
    "total": 223928
  },
  {
    "zone": "TRICHY ZONE",
    "district": "PUDUKOTTAI",
    "ac_no": 181,
    "constituency": "Thirumayam",
    "male": 107006,
    "female": 112270,
    "third_gender": 3,
    "total": 219279
  },
  {
    "zone": "TRICHY ZONE",
    "district": "PUDUKOTTAI",
    "ac_no": 182,
    "constituency": "Alangudi",
    "male": 103987,
    "female": 106309,
    "third_gender": 0,
    "total": 210296
  },
  {
    "zone": "TRICHY ZONE",
    "district": "PUDUKOTTAI",
    "ac_no": 183,
    "constituency": "Aranthangi",
    "male": 112282,
    "female": 115305,
    "third_gender": 1,
    "total": 227588
  },
  {
    "zone": "TRICHY ZONE",
    "district": "ARIYALUR",
    "ac_no": 149,
    "constituency": "Ariyalur",
    "male": 129521,
    "female": 131624,
    "third_gender": 16,
    "total": 261161
  },
  {
    "zone": "TRICHY ZONE",
    "district": "ARIYALUR",
    "ac_no": 150,
    "constituency": "Jayankondam",
    "male": 129713,
    "female": 132068,
    "third_gender": 12,
    "total": 261793
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "DINDIGUL",
    "ac_no": 127,
    "constituency": "Palani",
    "male": 115728,
    "female": 121582,
    "third_gender": 49,
    "total": 237359
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "DINDIGUL",
    "ac_no": 128,
    "constituency": "Oddanchatram",
    "male": 104519,
    "female": 113177,
    "third_gender": 2,
    "total": 217698
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "DINDIGUL",
    "ac_no": 129,
    "constituency": "Athoor",
    "male": 125056,
    "female": 134773,
    "third_gender": 17,
    "total": 259846
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "DINDIGUL",
    "ac_no": 130,
    "constituency": "Nilakkottai",
    "male": 107389,
    "female": 111673,
    "third_gender": 15,
    "total": 219077
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "DINDIGUL",
    "ac_no": 131,
    "constituency": "Natham",
    "male": 127116,
    "female": 131421,
    "third_gender": 66,
    "total": 258603
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "DINDIGUL",
    "ac_no": 132,
    "constituency": "Dindigul",
    "male": 114893,
    "female": 122765,
    "third_gender": 21,
    "total": 237679
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "DINDIGUL",
    "ac_no": 133,
    "constituency": "Vedasandur",
    "male": 118236,
    "female": 123573,
    "third_gender": 4,
    "total": 241813
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "THENI",
    "ac_no": 198,
    "constituency": "Andipatti",
    "male": 124591,
    "female": 129928,
    "third_gender": 30,
    "total": 254549
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "THENI",
    "ac_no": 199,
    "constituency": "Periyakulam",
    "male": 128368,
    "female": 135070,
    "third_gender": 109,
    "total": 263547
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "THENI",
    "ac_no": 200,
    "constituency": "Bodinayakanur",
    "male": 126856,
    "female": 134760,
    "third_gender": 15,
    "total": 261631
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "THENI",
    "ac_no": 201,
    "constituency": "Cumbum",
    "male": 122496,
    "female": 131129,
    "third_gender": 21,
    "total": 253646
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "VIRUDHUNAGAR",
    "ac_no": 202,
    "constituency": "Rajapalayam",
    "male": 103236,
    "female": 108951,
    "third_gender": 33,
    "total": 212220
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "VIRUDHUNAGAR",
    "ac_no": 203,
    "constituency": "Srivilliputhur",
    "male": 108109,
    "female": 114218,
    "third_gender": 40,
    "total": 222367
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "VIRUDHUNAGAR",
    "ac_no": 204,
    "constituency": "Sattur",
    "male": 110693,
    "female": 117207,
    "third_gender": 63,
    "total": 227963
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "VIRUDHUNAGAR",
    "ac_no": 205,
    "constituency": "Sivakasi",
    "male": 109420,
    "female": 116013,
    "third_gender": 28,
    "total": 225461
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "VIRUDHUNAGAR",
    "ac_no": 206,
    "constituency": "Virudhunagar",
    "male": 96436,
    "female": 102141,
    "third_gender": 39,
    "total": 198616
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "VIRUDHUNAGAR",
    "ac_no": 207,
    "constituency": "Aruppukkottai",
    "male": 1e5,
    "female": 106468,
    "third_gender": 29,
    "total": 206497
  },
  {
    "zone": "VIRUDHUNAGAR ZONE",
    "district": "VIRUDHUNAGAR",
    "ac_no": 208,
    "constituency": "Tiruchuli",
    "male": 100645,
    "female": 103634,
    "third_gender": 14,
    "total": 204293
  },
  {
    "zone": "THANJAI ZONE",
    "district": "NAGAPATTINAM",
    "ac_no": 163,
    "constituency": "Nagapattinam",
    "male": 84493,
    "female": 88464,
    "third_gender": 22,
    "total": 172979
  },
  {
    "zone": "THANJAI ZONE",
    "district": "NAGAPATTINAM",
    "ac_no": 164,
    "constituency": "Kilvelur",
    "male": 83392,
    "female": 85535,
    "third_gender": 7,
    "total": 168934
  },
  {
    "zone": "THANJAI ZONE",
    "district": "NAGAPATTINAM",
    "ac_no": 165,
    "constituency": "Vedaranyam",
    "male": 91735,
    "female": 94299,
    "third_gender": 0,
    "total": 186034
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THIRUVARUR",
    "ac_no": 166,
    "constituency": "Thiruthuraipoondi",
    "male": 111001,
    "female": 114348,
    "third_gender": 14,
    "total": 225363
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THIRUVARUR",
    "ac_no": 167,
    "constituency": "Mannargudi",
    "male": 112530,
    "female": 119401,
    "third_gender": 4,
    "total": 231935
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THIRUVARUR",
    "ac_no": 168,
    "constituency": "Thiruvarur",
    "male": 126054,
    "female": 131818,
    "third_gender": 20,
    "total": 257892
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THIRUVARUR",
    "ac_no": 169,
    "constituency": "Nannilam",
    "male": 131094,
    "female": 133352,
    "third_gender": 16,
    "total": 264462
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THANJAVUR",
    "ac_no": 170,
    "constituency": "Thiruvidaimarudur",
    "male": 125132,
    "female": 129313,
    "third_gender": 8,
    "total": 254453
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THANJAVUR",
    "ac_no": 171,
    "constituency": "Kumbakonam",
    "male": 122383,
    "female": 129469,
    "third_gender": 16,
    "total": 251868
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THANJAVUR",
    "ac_no": 172,
    "constituency": "Papanasam",
    "male": 123838,
    "female": 130791,
    "third_gender": 23,
    "total": 254652
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THANJAVUR",
    "ac_no": 173,
    "constituency": "Thiruvaiyaru",
    "male": 125357,
    "female": 131e3,
    "third_gender": 20,
    "total": 256377
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THANJAVUR",
    "ac_no": 174,
    "constituency": "Thanjavur",
    "male": 118648,
    "female": 130369,
    "third_gender": 47,
    "total": 249064
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THANJAVUR",
    "ac_no": 175,
    "constituency": "Orathanadu",
    "male": 112298,
    "female": 118947,
    "third_gender": 6,
    "total": 231251
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THANJAVUR",
    "ac_no": 176,
    "constituency": "Pattukkottai",
    "male": 115354,
    "female": 125580,
    "third_gender": 20,
    "total": 240954
  },
  {
    "zone": "THANJAI ZONE",
    "district": "THANJAVUR",
    "ac_no": 177,
    "constituency": "Peravurani",
    "male": 104268,
    "female": 108543,
    "third_gender": 15,
    "total": 212826
  },
  {
    "zone": "THANJAI ZONE",
    "district": "MAYILADUTHURAI",
    "ac_no": 160,
    "constituency": "Sirkazhi",
    "male": 118809,
    "female": 120647,
    "third_gender": 13,
    "total": 239469
  },
  {
    "zone": "THANJAI ZONE",
    "district": "MAYILADUTHURAI",
    "ac_no": 161,
    "constituency": "Mayiladuthurai",
    "male": 114613,
    "female": 117979,
    "third_gender": 26,
    "total": 232618
  },
  {
    "zone": "THANJAI ZONE",
    "district": "MAYILADUTHURAI",
    "ac_no": 162,
    "constituency": "Poompuhar",
    "male": 127071,
    "female": 130050,
    "third_gender": 8,
    "total": 257129
  },
  {
    "zone": "MADURAI ZONE",
    "district": "SIVAGANGA",
    "ac_no": 184,
    "constituency": "Karaikudi",
    "male": 148087,
    "female": 155256,
    "third_gender": 28,
    "total": 303371
  },
  {
    "zone": "MADURAI ZONE",
    "district": "SIVAGANGA",
    "ac_no": 185,
    "constituency": "Tiruppattur",
    "male": 134270,
    "female": 139183,
    "third_gender": 3,
    "total": 273456
  },
  {
    "zone": "MADURAI ZONE",
    "district": "SIVAGANGA",
    "ac_no": 186,
    "constituency": "Sivaganga",
    "male": 135113,
    "female": 141039,
    "third_gender": 4,
    "total": 276156
  },
  {
    "zone": "MADURAI ZONE",
    "district": "SIVAGANGA",
    "ac_no": 187,
    "constituency": "Manamadurai",
    "male": 126565,
    "female": 131048,
    "third_gender": 3,
    "total": 257616
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 188,
    "constituency": "Melur",
    "male": 113091,
    "female": 114687,
    "third_gender": 11,
    "total": 227789
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 189,
    "constituency": "Madurai East",
    "male": 161361,
    "female": 169579,
    "third_gender": 53,
    "total": 330993
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 190,
    "constituency": "Sholavandan",
    "male": 104246,
    "female": 108243,
    "third_gender": 13,
    "total": 212502
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 191,
    "constituency": "Madurai North",
    "male": 106263,
    "female": 112410,
    "third_gender": 46,
    "total": 218719
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 192,
    "constituency": "Madurai South",
    "male": 87179,
    "female": 90378,
    "third_gender": 48,
    "total": 177605
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 193,
    "constituency": "Madurai Central",
    "male": 95632,
    "female": 101198,
    "third_gender": 26,
    "total": 196856
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 194,
    "constituency": "Madurai West",
    "male": 133116,
    "female": 138214,
    "third_gender": 11,
    "total": 271341
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 195,
    "constituency": "Thiruparankundram",
    "male": 150596,
    "female": 157157,
    "third_gender": 30,
    "total": 307783
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 196,
    "constituency": "Thirumangalam",
    "male": 125756,
    "female": 133461,
    "third_gender": 8,
    "total": 259225
  },
  {
    "zone": "MADURAI ZONE",
    "district": "MADURAI",
    "ac_no": 197,
    "constituency": "Usilampatti",
    "male": 131411,
    "female": 132724,
    "third_gender": 6,
    "total": 264141
  },
  {
    "zone": "MADURAI ZONE",
    "district": "RAMANATHAPURAM",
    "ac_no": 209,
    "constituency": "Paramakudi",
    "male": 115701,
    "female": 117714,
    "third_gender": 18,
    "total": 233433
  },
  {
    "zone": "MADURAI ZONE",
    "district": "RAMANATHAPURAM",
    "ac_no": 210,
    "constituency": "Tiruvadanai",
    "male": 140103,
    "female": 141997,
    "third_gender": 21,
    "total": 282121
  },
  {
    "zone": "MADURAI ZONE",
    "district": "RAMANATHAPURAM",
    "ac_no": 211,
    "constituency": "Ramanathapuram",
    "male": 152412,
    "female": 157740,
    "third_gender": 13,
    "total": 310165
  },
  {
    "zone": "MADURAI ZONE",
    "district": "RAMANATHAPURAM",
    "ac_no": 212,
    "constituency": "Mudhukulathur",
    "male": 148105,
    "female": 149202,
    "third_gender": 3,
    "total": 297310
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "THOOTHUKUDI",
    "ac_no": 213,
    "constituency": "Vilathikulam",
    "male": 99913,
    "female": 103804,
    "third_gender": 15,
    "total": 203732
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "THOOTHUKUDI",
    "ac_no": 214,
    "constituency": "Thoothukkudi",
    "male": 120614,
    "female": 127623,
    "third_gender": 63,
    "total": 248300
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "THOOTHUKUDI",
    "ac_no": 215,
    "constituency": "Tiruchendur",
    "male": 112367,
    "female": 118305,
    "third_gender": 30,
    "total": 230702
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "THOOTHUKUDI",
    "ac_no": 216,
    "constituency": "Srivaikuntam",
    "male": 105099,
    "female": 107782,
    "third_gender": 4,
    "total": 212885
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "THOOTHUKUDI",
    "ac_no": 217,
    "constituency": "Ottapidaram",
    "male": 117432,
    "female": 123502,
    "third_gender": 54,
    "total": 240988
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "THOOTHUKUDI",
    "ac_no": 218,
    "constituency": "Kovilpatti",
    "male": 116317,
    "female": 123673,
    "third_gender": 27,
    "total": 240017
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TIRUNELVELI",
    "ac_no": 224,
    "constituency": "Tirunelveli",
    "male": 132511,
    "female": 140929,
    "third_gender": 80,
    "total": 273520
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TIRUNELVELI",
    "ac_no": 225,
    "constituency": "Ambasamudram",
    "male": 109384,
    "female": 116318,
    "third_gender": 12,
    "total": 225714
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TIRUNELVELI",
    "ac_no": 226,
    "constituency": "Palayamkottai",
    "male": 123972,
    "female": 131141,
    "third_gender": 17,
    "total": 255130
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TIRUNELVELI",
    "ac_no": 227,
    "constituency": "Nanguneri",
    "male": 125276,
    "female": 129130,
    "third_gender": 14,
    "total": 254420
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TIRUNELVELI",
    "ac_no": 228,
    "constituency": "Radhapuram",
    "male": 120458,
    "female": 124e3,
    "third_gender": 22,
    "total": 244480
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "KANNIYAKUMARI",
    "ac_no": 229,
    "constituency": "Kanniyakumari",
    "male": 141230,
    "female": 145643,
    "third_gender": 95,
    "total": 286968
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "KANNIYAKUMARI",
    "ac_no": 230,
    "constituency": "Nagercoil",
    "male": 125873,
    "female": 131139,
    "third_gender": 10,
    "total": 257022
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "KANNIYAKUMARI",
    "ac_no": 231,
    "constituency": "Colachal",
    "male": 131885,
    "female": 131562,
    "third_gender": 1,
    "total": 263448
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "KANNIYAKUMARI",
    "ac_no": 232,
    "constituency": "Padmanabhapuram",
    "male": 116895,
    "female": 117142,
    "third_gender": 19,
    "total": 234056
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "KANNIYAKUMARI",
    "ac_no": 233,
    "constituency": "Vilavancode",
    "male": 111990,
    "female": 113226,
    "third_gender": 3,
    "total": 225219
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "KANNIYAKUMARI",
    "ac_no": 234,
    "constituency": "Killiyoor",
    "male": 123143,
    "female": 120678,
    "third_gender": 16,
    "total": 243837
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TENKASI",
    "ac_no": 219,
    "constituency": "Sankarankovil",
    "male": 114876,
    "female": 121639,
    "third_gender": 17,
    "total": 236532
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TENKASI",
    "ac_no": 220,
    "constituency": "Vasudevanallur",
    "male": 110960,
    "female": 116396,
    "third_gender": 13,
    "total": 227369
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TENKASI",
    "ac_no": 221,
    "constituency": "Kadayanallur",
    "male": 132228,
    "female": 135272,
    "third_gender": 17,
    "total": 267517
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TENKASI",
    "ac_no": 222,
    "constituency": "Tenkasi",
    "male": 136260,
    "female": 143223,
    "third_gender": 102,
    "total": 279585
  },
  {
    "zone": "TIRUNELVELI ZONE",
    "district": "TENKASI",
    "ac_no": 223,
    "constituency": "Alangulam",
    "male": 123739,
    "female": 129650,
    "third_gender": 19,
    "total": 253408
  }
];
const DEPARTMENTS = [{
  id: "professional",
  nameEn: "Professional Services",
  nameTa: "தொழில்முறைப் பிரிவுகள்",
  descEn: "Legal, technical, financial, and digital expert networks.",
  descTa: "சட்டம், தொழில்நுட்பம், நிதி மற்றும் டிஜிட்டல் சார்ந்த நிபுணர் கூட்டமைப்பு.",
  wings: ["women-entrepreneurs", "chartered-accountants", "doctors", "lawyers", "engineers", "information-technology", "young-entrepreneurs", "media-relations"]
}, {
  id: "agricultural",
  nameEn: "Agricultural & Food Industry",
  nameTa: "விவசாயம் மற்றும் உணவுப் பிரிவுகள்",
  descEn: "Farming, organic agro-trading, milk farmers, and restaurant owners.",
  descTa: "விவசாயிகள், இயற்கை உற்பத்தி, பால் பண்ணை மற்றும் உணவக உரிமையாளர்கள்.",
  wings: ["agriculture", "restaurant-owners", "marine-business", "tribal-entrepreneurs", "distributors"]
}, {
  id: "industrial",
  nameEn: "Industrial & Manufacturing Trade",
  nameTa: "தொழில் மற்றும் வர்த்தகப் பிரிவுகள்",
  descEn: "Heavy industrial manufacturers, textile weavers, logistics, and real estate developers.",
  descTa: "உற்பத்தியாளர்கள், நெசவாளர்கள், தளவாடங்கள் மற்றும் கட்டுமானத் துறை சார்ந்தவர்கள்.",
  wings: ["manufacturers", "import-export", "weavers", "printing-press", "computer-mobile", "insurance-finance"]
}, {
  id: "public",
  nameEn: "Public & General Services",
  nameTa: "பொது மற்றும் சமூகப் பிரிவுகள்",
  descEn: "Retailers, handloom craftsmen, tourism agencies, and workers unions.",
  descTa: "சிறு சில்லறை வணிகர்கள், கைத்தறி கலைஞர்கள், சுற்றுலா முகவர்கள் மற்றும் தொழிலாளர்கள்.",
  wings: ["labour", "differently-abled", "transgender-entrepreneurs", "pharmacists", "educators", "tourism-transport", "sports-business", "shop-owners", "street-vendors", "hotels-lodgings", "beauty-fitness", "central-govt-relations", "state-govt-relations", "cottage-industry", "digital-advertisers"]
}];
function Wings() {
  const {
    t,
    language
  } = useLanguage();
  const [activeTab, setActiveTab] = useState("wings");
  const [query, setQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [zoneQuery, setZoneQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("all");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const uniqueZones = Array.from(new Set(ZONE_BREAKDOWN.map((item) => item.zone)));
  const availableDistricts = Array.from(new Set(ZONE_BREAKDOWN.filter((item) => selectedZone === "all" || item.zone === selectedZone).map((item) => item.district)));
  const statsZonesCount = uniqueZones.length;
  const statsDistrictsCount = Array.from(new Set(ZONE_BREAKDOWN.map((item) => item.district))).length;
  ZONE_BREAKDOWN.reduce((sum, item) => sum + item.total, 0);
  const filteredWings = WINGS.filter((w) => {
    const term = query.toLowerCase();
    return w.nameEn.toLowerCase().includes(term) || w.nameTa.toLowerCase().includes(term) || w.descriptionEn.toLowerCase().includes(term) || w.descriptionTa.toLowerCase().includes(term);
  });
  const filteredZones = ZONE_BREAKDOWN.filter((item) => {
    const term = zoneQuery.toLowerCase();
    const matchesSearch = item.constituency.toLowerCase().includes(term) || item.district.toLowerCase().includes(term) || item.zone.toLowerCase().includes(term) || item.ac_no.toString().includes(term);
    const matchesZone = selectedZone === "all" || item.zone === selectedZone;
    const matchesDistrict = selectedDistrict === "all" || item.district === selectedDistrict;
    return matchesSearch && matchesZone && matchesDistrict;
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-slate-200/60 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-10 md:py-12", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs(Link, { to: "/services", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
        " ",
        t("சேவைகளுக்குத் திரும்பு", "Back to Services")
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex border-b border-slate-200 mb-8", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab("wings"), className: `pb-4 px-6 font-display text-sm md:text-base font-bold transition-all relative cursor-pointer ${activeTab === "wings" ? "text-primary" : "text-slate-400 hover:text-slate-600"}`, children: [
          t("34 வணிகப் பிரிவுகள்", "34 Specialized Wings"),
          activeTab === "wings" && /* @__PURE__ */ jsx(motion.div, { layoutId: "activeTabUnderline", className: "absolute bottom-0 left-0 right-0 h-0.75 bg-primary rounded-full" })
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab("zones"), className: `pb-4 px-6 font-display text-sm md:text-base font-bold transition-all relative cursor-pointer ${activeTab === "zones" ? "text-primary" : "text-slate-400 hover:text-slate-600"}`, children: [
          t("மண்டல வாரியான தொகுதிகள்", "Regional Zone Breakdown"),
          activeTab === "zones" && /* @__PURE__ */ jsx(motion.div, { layoutId: "activeTabUnderline", className: "absolute bottom-0 left-0 right-0 h-0.75 bg-primary rounded-full" })
        ] })
      ] }),
      activeTab === "wings" ? /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary animate-pulse" }),
          /* @__PURE__ */ jsx("span", { children: t("துணைப் பிரிவுகள்", "Specialized Wings") })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-2xl md:text-4xl font-bold text-slate-800 leading-tight max-w-3xl", children: t("வணிகர்களின் சங்கமத்தின் 34 பிரிவுகள்", "34 Organizational Wings") }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs md:text-sm text-slate-500 max-w-2xl font-tamil leading-relaxed", children: t("உங்கள் வணிகத்தின் தன்மைக்கு ஏற்ற பிரிவைத் தேர்ந்தெடுத்து, அதற்கான சிறப்புச் சலுகைகள், சட்ட ஆலோசனைகள் மற்றும் தொழில் கூட்டுறவு வாய்ப்புகளைப் பெறுங்கள்.", "Choose the wing that fits your business type to access specialized support, trade benefits, advisory services, and specific networking channels.") }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 max-w-xl relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-slate-400" }) }),
          /* @__PURE__ */ jsx("input", { type: "text", value: query, onChange: (e) => setQuery(e.target.value), placeholder: t("பிரிவைத் தேடுக... (எ.கா: மகளிர், IT, உணவகம்)", "Search wings... (e.g. Women, IT, Restaurant)"), className: "block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl bg-white shadow-xs focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary text-xs md:text-sm transition duration-300 min-h-[44px]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-2 flex-wrap pb-1 overflow-x-auto", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setSelectedDept("all"), className: `px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer min-h-[36px] border ${selectedDept === "all" ? "bg-primary text-white border-primary shadow-xs" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`, children: t("அனைத்துப் பிரிவுகளும்", "All Departments") }),
          DEPARTMENTS.map((dept) => /* @__PURE__ */ jsx("button", { onClick: () => setSelectedDept(dept.id), className: `px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer min-h-[36px] border ${selectedDept === dept.id ? "bg-primary text-white border-primary shadow-xs" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`, children: language === "ta" ? dept.nameTa : dept.nameEn }, dept.id))
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5 text-primary" }),
          /* @__PURE__ */ jsx("span", { children: t("புவியியல் கவரேஜ்", "Geographical Coverage") })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-2xl md:text-4xl font-bold text-slate-800 leading-tight max-w-3xl", children: t("தமிழக மண்டல மற்றும் தொகுதி வாரியான பகுப்பாய்வு", "Tamil Nadu Zone & Constituency Breakdown") }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs md:text-sm text-slate-500 max-w-2xl font-tamil leading-relaxed", children: t("தமிழ்நாடு வணிகர்களின் சங்கமம் அமைப்பின் கீழ் செயல்படும் அதிகாரப்பூர்வ மண்டலங்கள், மாவட்டங்கள் மற்றும் சட்டமன்ற தொகுதிகளின் முழு விவரங்கள்.", "Explore the full regional coverage of our association, mapped strictly by regional zones, covered districts, and corresponding legislative assembly constituencies.") }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 grid grid-cols-2 gap-4 max-w-md", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-xs", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl md:text-2xl font-bold text-primary tabular-nums", children: statsZonesCount }),
            /* @__PURE__ */ jsx("div", { className: "text-xxs uppercase tracking-wider text-slate-400 font-semibold mt-1", children: t("அதிகாரப்பூர்வ மண்டலங்கள்", "Regional Zones") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-xs", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl md:text-2xl font-bold text-primary tabular-nums", children: statsDistrictsCount }),
            /* @__PURE__ */ jsx("div", { className: "text-xxs uppercase tracking-wider text-slate-400 font-semibold mt-1", children: t("உள்ளடக்கிய மாவட்டங்கள்", "Districts Covered") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "w-full md:max-w-md relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-slate-400" }) }),
          /* @__PURE__ */ jsx("input", { type: "text", value: zoneQuery, onChange: (e) => {
            setZoneQuery(e.target.value);
          }, placeholder: t("தொகுதி, மாவட்டம் அல்லது மண்டலம் தேடுக...", "Search constituency, district or zone..."), className: "block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl bg-white shadow-xs focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary text-xs md:text-sm transition duration-300 min-h-[44px]" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-2 flex-wrap pb-1 overflow-x-auto", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => {
            setSelectedZone("all");
            setSelectedDistrict("all");
          }, className: `px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer min-h-[36px] border ${selectedZone === "all" ? "bg-primary text-white border-primary shadow-xs" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`, children: t("அனைத்து மண்டலங்களும்", "All Zones") }),
          uniqueZones.map((zone) => /* @__PURE__ */ jsx("button", { onClick: () => {
            setSelectedZone(zone);
            setSelectedDistrict("all");
          }, className: `px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer min-h-[36px] border ${selectedZone === zone ? "bg-primary text-white border-primary shadow-xs" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`, children: zone }, zone))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-1.5 flex-wrap pb-1 overflow-x-auto", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setSelectedDistrict("all"), className: `px-3 py-1.5 rounded-full text-xxs font-bold transition cursor-pointer border ${selectedDistrict === "all" ? "bg-slate-800 border-slate-800 text-white shadow-xs" : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-250"}`, children: t("அனைத்து மாவட்டங்களும்", "All Districts") }),
          availableDistricts.map((district) => /* @__PURE__ */ jsx("button", { onClick: () => setSelectedDistrict(district), className: `px-3 py-1.5 rounded-full text-xxs font-bold transition cursor-pointer border ${selectedDistrict === district ? "bg-slate-800 border-slate-800 text-white shadow-xs" : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-250"}`, children: district }, district))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "py-8", children: activeTab === "wings" ? /* @__PURE__ */ jsx("div", { children: filteredWings.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-16 bg-white border border-slate-250/60 rounded-2xl p-6 shadow-xs max-w-md mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-slate-400 text-sm font-semibold", children: t("பிரிவுகள் எதுவும் காணப்படவில்லை.", "No matching wings found.") }),
      /* @__PURE__ */ jsx("button", { onClick: () => setQuery(""), className: "mt-3 text-xs text-primary font-bold hover:underline", children: t("அனைத்தையும் காட்டு", "Clear Search & View All") })
    ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-12", children: DEPARTMENTS.filter((d) => selectedDept === "all" || selectedDept === d.id).map((dept) => {
      const deptWings = filteredWings.filter((w) => dept.wings.includes(w.id));
      if (deptWings.length === 0) return null;
      return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b border-slate-200/80 pb-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-lg md:text-xl font-bold text-slate-800 leading-snug", children: language === "ta" ? dept.nameTa : dept.nameEn }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-0.5 leading-relaxed font-tamil", children: language === "ta" ? dept.descTa : dept.descEn })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: /* @__PURE__ */ jsx(AnimatePresence, { children: deptWings.map((w, index) => {
          const Icon = w.icon;
          return /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.2,
            delay: Math.min(index * 0.02, 0.15)
          }, className: "card-base card-interactive group p-5 md:p-6 flex flex-col justify-between min-h-[190px]", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/5 text-primary grid place-items-center transition duration-300 group-hover:bg-primary group-hover:text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-sm md:text-base text-slate-800 leading-snug", children: language === "ta" ? w.nameTa : w.nameEn }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 leading-relaxed font-tamil", children: language === "ta" ? w.descriptionTa : w.descriptionEn })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between", children: /* @__PURE__ */ jsxs(Link, { to: "/membership", search: {
              wing: w.id
            }, className: "inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline transition-all cursor-pointer min-h-[30px]", children: [
              t("இணைவு / Join", "Join Wing"),
              " ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ] }) })
          ] }, w.id);
        }) }) })
      ] }, dept.id);
    }) }) }) : /* @__PURE__ */ jsx("div", { children: filteredZones.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-16 bg-white border border-slate-250/60 rounded-2xl p-6 shadow-xs max-w-md mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-slate-400 text-sm font-semibold", children: t("தொகுதிகள் எதுவும் காணப்படவில்லை.", "No matching constituencies found.") }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        setZoneQuery("");
        setSelectedZone("all");
        setSelectedDistrict("all");
      }, className: "mt-3 text-xs text-primary font-bold hover:underline", children: t("வடிகட்டிகளை நீக்கு", "Clear Filters & View All") })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "block md:hidden divide-y divide-slate-100", children: [
        filteredZones.slice(0, 100).map((item) => /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "text-xxs font-bold text-slate-400 tracking-wider", children: [
                "AC #",
                item.ac_no
              ] }),
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-sm text-slate-800 font-display leading-tight", children: item.constituency })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xxs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full", children: item.zone })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xxs text-slate-500 font-semibold", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              t("மாவட்டம்", "District"),
              ": ",
              item.district
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-slate-800 font-bold", children: [
              t("மொத்தம்", "Total"),
              ": ",
              item.total.toLocaleString()
            ] })
          ] }),
          (() => {
            const malePct = Math.round(item.male / item.total * 100);
            const femalePct = 100 - malePct;
            return /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-slate-400", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "M: ",
                  malePct,
                  "%"
                ] }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "F: ",
                  femalePct,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full bg-slate-100 h-1.5 rounded-full overflow-hidden flex", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-primary h-full", style: {
                  width: `${malePct}%`
                } }),
                /* @__PURE__ */ jsx("div", { className: "bg-rose-400 h-full", style: {
                  width: `${femalePct}%`
                } })
              ] })
            ] });
          })()
        ] }, `${item.ac_no}-${item.constituency}`)),
        filteredZones.length > 100 && /* @__PURE__ */ jsx("div", { className: "p-4 text-center text-xs text-slate-400 bg-slate-50 font-semibold font-tamil", children: t(`மேலும் ${filteredZones.length - 100} தொகுதிகள் உள்ளன...`, `And ${filteredZones.length - 100} more constituencies matches...`) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50 border-b border-slate-200 text-xxs uppercase tracking-wider text-slate-400 font-bold", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-5 w-20", children: "AC No" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-5", children: t("சட்டமன்ற தொகுதி", "Constituency") }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-5", children: t("மாவட்டம்", "District") }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-5", children: t("மண்டலம்", "Zone") }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-5 w-32", children: t("பாலின விகிதம் (ஆண் / பெண்)", "Gender Ratio (M / F)") }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-5 text-right w-36", children: t("மொத்த வாக்காளர்கள்", "Total Voters") })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-slate-100 text-xs md:text-sm text-slate-650", children: [
          filteredZones.slice(0, 100).map((item) => {
            const malePct = Math.round(item.male / item.total * 100);
            const femalePct = 100 - malePct;
            return /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/50 transition", children: [
              /* @__PURE__ */ jsxs("td", { className: "py-3.5 px-5 font-bold text-slate-400 tabular-nums", children: [
                "#",
                item.ac_no
              ] }),
              /* @__PURE__ */ jsx("td", { className: "py-3.5 px-5 font-bold font-display text-slate-800", children: item.constituency }),
              /* @__PURE__ */ jsx("td", { className: "py-3.5 px-5 font-semibold text-slate-600", children: item.district }),
              /* @__PURE__ */ jsx("td", { className: "py-3.5 px-5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md uppercase tracking-wider", children: item.zone }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3.5 px-5", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-slate-400 font-semibold", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    malePct,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    femalePct,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "w-full bg-slate-100 h-1.5 rounded-full overflow-hidden flex", title: `Male: ${item.male.toLocaleString()} | Female: ${item.female.toLocaleString()}`, children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-primary h-full", style: {
                    width: `${malePct}%`
                  } }),
                  /* @__PURE__ */ jsx("div", { className: "bg-rose-400 h-full", style: {
                    width: `${femalePct}%`
                  } })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3.5 px-5 text-right font-bold text-slate-800 tabular-nums", children: item.total.toLocaleString() })
            ] }, `${item.ac_no}-${item.constituency}`);
          }),
          filteredZones.length > 100 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 6, className: "py-4 text-center text-xs text-slate-450 bg-slate-50 font-semibold font-tamil", children: t(`மேலும் ${filteredZones.length - 100} சட்டமன்ற தொகுதிகள் உள்ளன...`, `And ${filteredZones.length - 100} more assembly constituencies matches...`) }) })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { className: "py-12 border-t border-slate-200/80 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 text-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center md:text-left", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-gold/25 border border-gold/15 text-gold text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider", children: "நிர்வாகியாக இணைய" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold leading-tight", children: "தலைமை ஏற்கத் தயாரா?" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-slate-350 max-w-xl font-tamil leading-relaxed", children: "உங்கள் பரிந்துரை லிங்க் மூலம் 25 வணிகர்களை ஒன்றிணைத்து, தமிழ்நாடு வணிகர்களின் சங்கமத்தில் 'ஒருங்கிணைப்பாளர்' பொறுப்பை பெற்றிடுங்கள்!" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/dashboard", className: "bg-white hover:bg-slate-100 text-slate-900 px-6 py-3.5 rounded-xl font-bold text-xs transition shadow-md shrink-0 inline-flex items-center gap-1.5 min-h-[44px]", children: [
        t("டாஷ்போர்டுக்கு செல்க", "Go to Dashboard"),
        " ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-slate-900" })
      ] })
    ] }) })
  ] });
}
export {
  Wings as component
};
