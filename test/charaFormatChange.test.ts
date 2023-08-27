import { useChrFormatChange } from '@/hooks/useChrFormatChange'

describe('useChrFormatChange Test', () => {
  const {
    fixHiraGanaText,
    fixKataKanaText,
    fixFullWidth,
    fixHalfWidth,
    removeSpace,
    removeFullWidth,
    removeFullWidthNumber,
    removeFullWidthNumberAlphabet,
    removeFullWidthSymbol,
    removeHalfWidthNumber,
    removeOtherHalfNumber,
  } = useChrFormatChange()

  describe('fixHiraGanaText Test', () => {
    test('ア -> あ Test', () => expect(fixHiraGanaText('アアアア')).toBe('ああああ'))
  })

  describe('fixKataKanaText Test', () => {
    test('あ -> ア Test', () => expect(fixKataKanaText('ああああ')).toBe('アアアア'))
  })

  describe('fixFullWidth Test', () => {
    test('ｱ -> ア Test', () => expect(fixFullWidth('ｱｱｱｱ')).toBe('アアアア'))
    test('s -> ｓ Test', () => expect(fixFullWidth('ssss')).toBe('ｓｓｓｓ'))
    test('1 -> １ Test', () => expect(fixFullWidth('1111')).toBe('１１１１'))
  })

  describe('fixHalfWidth Test', () => {
    test('ア -> ｱ Test', () => expect(fixHalfWidth('アアアア')).toBe('ｱｱｱｱ'))
    test('ｓ -> s Test', () => expect(fixHalfWidth('ｓｓｓｓ')).toBe('ssss'))
    test('１ -> 1 Test', () => expect(fixHalfWidth('１１１１')).toBe('1111'))
  })

  describe('removeFullWidthNumber Test', () => {
    test('remove "１２３" Test', () => expect(removeFullWidthNumber('１２３')).toBe(''))
  })

  describe('removeFullWidthNumberAlphabet Test', () => {
    test('remove "１２３ｃｂｃ" Test', () => expect(removeFullWidthNumberAlphabet('１２３ｃｂｃ')).toBe(''))
  })

  describe('removeFullWidth Test', () => {
    test('remove "あfdaｋ" Test', () => expect(removeFullWidth('あfdaｋ')).toBe('fda'))
  })

  describe('removeFullWidthSymbol Test', () => {
    const symbol = `！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～`
    test(`remove "${symbol}" Test`, () => expect(removeFullWidthSymbol(symbol)).toBe(''))
  })

  describe('removeHalfWidthNumber Test', () => {
    test('remove "123" Test', () => expect(removeHalfWidthNumber('123')).toBe(''))
  })

  describe('removeSpace Test', () => {
    test('remove "a a　" Test', () => expect(removeSpace('a a　')).toBe('aa'))
  })

  describe('removeOtherHalfNumber Test', () => {
    test('remove "a" Test', () => expect(removeOtherHalfNumber('aaaa')).toBe(''))
  })
})
