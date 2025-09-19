/*
Zod : 타입스크립트 우선 스키마 유효성 검사 라이브러리

일기 데이터의 타입 & 스키마 생성 코드
*/

import { z } from "zod";
export const EmotionBaseEnum = z.enum([
    // 우리 기존 "하루뒤" 감정 데이터 기반으로 넣어주기
    "Relation", // 관계 기반 감정
    "Self",     // 자기 자신에 대한 감정
    "State"     // 상태성 감정
])

export type EmotionBase = z.infer<typeof EmotionBaseEnum>;

export const EmotionTypeEnum =z.enum([

    "무난", // 기본 감정

    "감사", "존경", "신뢰", "애정", "친밀", "유대", "사랑", "공감", "질투", "시기",
    "분노", "짜증", "실망", "억울", "속상", "상처", "배신감", "경멸", "거부감", "불쾌",  // 관계 기반 감정

    "자긍심", "자신감", "뿌듯함", "성취감", "만족감", "부끄러움", "수치", "죄책감", "후회", "뉘우침", "창피", "굴욕", // 자기 자신에 대한 감정

    "행복", "기쁨", "즐거움", "설렘", "평온", "편안", "안정", "차분", "기대", "긴장", "불안", "초조", "부담", "피로", "지침", "무기력", "지루", "공허", "외로움", "우울", "슬픔", "놀람", "흥분", "활력" // 상태성 감정

]);

export const RelationTypeEnum = z.enum([
    "친구","가족","직장동료","연인","동행","반려동물","기타"
]);

export type RelationType = z.infer<typeof RelationTypeEnum>;
export const DiarySchema = z.object({
    // 하루뒤 DB 스키마 기준으로 수정
});
export type Diary = z.infer<typeof DiarySchema>;


// 일기 랜덤 생성에 필요한 옵션 설정 객체

export interface GenerateOptions {
    //객체의 속성들
    seed?: string;          // 랜덤 시드값
    count?: number;         // 생성할 일기 개수
    startDate?: string;     // 시작 날짜 (YYYY-MM-DD), 이 날짜 부터 일기가 하나씩 생성됨
}
