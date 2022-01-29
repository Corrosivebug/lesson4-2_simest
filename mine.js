//                  begin1
alert("begin1")
let begin1 = Number(prompt("Введите сторону квадрата в см"))
let p1 = begin1 *4
alert("P = " + p1 + "см")


//                  begin2
alert("begin2")
let begin2 = Number(prompt("Введите сторону квадрата в см"))
let s2 = begin2 ** 2
alert("S = " + s2 + "см2")


//                  begin3
alert("begin3")
let begin3_a = Number(prompt("Введите сторону прямоугольника в см"))
let begin3_b = Number(prompt("Введите вторую сторону прямоугольника в см"))
let s3 = begin3_a *begin3_b
let p3 = 2*(begin3_a + begin3_b)
alert("S = " + s3 + "см2")
alert("P = " + p3 + "см")


//                  begin4
alert("begin4")
let begin4 = Number(prompt("Введите диаметр окружности"))
let L4 = 3.14*begin4
alert("Длина окружности равна: " + L4)


//                  begin5
alert("begin5")
let begin5 = Number(prompt("Введите длину ребра куба"))
V5 = begin5**3
S5 = 6*(begin5**3)
alert("V = " + V5)
alert("S5 = " + S5)


//                  begin6
alert("begin6")
let begin6_a = Number(prompt("Введите длину ребра"))
let begin6_b = Number( prompt("Введите длину ребра второй стороны"))
let begin6_c = Number(prompt("Введите длину ребра третей стороны"))
let V6 = begin6_a * begin6_b * begin6_c
let S6 = 2*(begin6_a*begin6_b + begin6_b*begin6_c + (begin6_a * begin6_c))
alert("V = " + V6)
alert("S = " + S6)


//                  begin7
alert("begin7")
let R7 = Number(prompt("Введите радиус окружности"))
let L7 = 2 * 3.14 * R7
let S7 = 3.14 * (R7**2)
alert("L = " + L7)
alert("S = " + S7)


//                  begin8
alert("begin8")
let begin8_1 = Number(prompt("Введите первое число"))
let begin8_2 = Number(prompt("Введите второе число"))
let Sym8 = (begin8_1 + begin8_2)/2
alert("Средне арефметическое = " + Sym8)


//                  begin9
alert("begin9")
let begin9_1 = Number(prompt("Введите первое число"))
let begin9_2 = Number(prompt("Введите второе число"))
let V9 = (begin8_1 * begin8_2)**0.5
alert("среднее геомитрическое = " + V9)


//                  begin10
alert("begin10")
let begin10_1 = Number(prompt("Введите первое не нулевое число"))
let begin10_2 = Number(prompt("Введите второе не нулевое число"))
let b1 = begin10_1 + begin10_2
let b2 = begin10_1 - begin10_2
let b3 = begin10_1 * begin10_2
let b4 = begin10_1 / begin10_2
let b5 = begin10_1 ** begin10_2
alert("Сумма = " + b1 + "разность = " + b2 + "произведение = " + b3 + " частное их квадратов = " + b4 + " частное их квадратов = " + b5)


//                  begin12
alert("begin12")
let a12 =Number(prompt("Введите значение 1 катитузы"))
let b12 =Number(prompt("Введите значение 1 катитузы"))
let c12 = ((a12**2)+(b12**2)**0.5)
let P12 = a12 + b12 +c12
alert("Гипатитуза треугугольника равна " + c12 + " а его пириметер = " + P12)


//                  begin13
alert("begin13")
let R1 = Number(prompt("Введите радиус первого круга(R1 > R2)"))
let R2 = Number(prompt("Введите радиус второго круга"))
let S1 = 3.14*(R1 * R1)
let S2 = 3.14*(R2 * R2)
let S3 = S1 + S2
alert("Площа первого круга: " + S1 + "/ площадь второго круга: " + S2 + "Площадь третиго: " + S3 )


//                  begin14
alert("begin14")
let L14 = Number(prompt("ВВедите L окружности:"))
let R14 = L14 / 2 / 3.14
let S14 = 3.14 * R14**2
alert("R круга = " + R14 + "S круга = " + S14)


//                  begin15
alert("begin15")
let S15 = prompt("Введите площадь круга.")
let D15 = S15 / 4 / 3.14
let L15 = 3.14 * D15
alert("Диаметер круга = " + D15 + " вто ремя пока L = " + L15)

//                  begin25
alert("begin25")
let x25 = Number(prompt("Введите значение(число) х"))
let y25 = (3*(x25**6))-(6*(x25**2))-7
alert ("y =" + y25)


//                  begin26
alert("begin26")
let x26 = Number(prompt("Введите значение(число) х"))
let y26 = 4*((x26-3)**6)-7*((x26-3)**3)+2
alert ("y = " + y26)


//                  begin27
alert("begin27")
let a27_1 = Number(prompt("Введите число А"))
let a27_2 = a27_1**2
let a27_4 = a27_1**4
let a27_8 = a27_1**8
alert (`a2 =${a27_2}; a4 = ${a27_4}; a8 =${a27_8};`)


//                  begin28
alert("begin28")
let a28_1 = Number(prompt("Введите число А"))
let a28_2 = a28_1**2
let a28_3 = a28_1**3
let a28_5 = a28_1**5
let a28_10 = a28_1**10
let a28_15 = a28_1**15
alert (`a2 =${a28_2}; a3 = ${a28_3}; a5 =${a28_5}; a10 =${a28_10}; a15 =${a28_15};`)