import React from "react";
import { ArrowLeft, Zap, Shield } from "lucide-react";

import { Link } from "react-router-dom";

export default function ChemArabic() {
  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300"
      dir="rtl"
    >
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/publishers/chemwatch"
            className="flex items-center text-emerald-600 dark:text-emerald-400 mb-8 hover:underline transition-colors dir-ltr w-fit"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to ChemWatch Master
          </Link>

          {/* Hero Section */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="p-8 md:p-12 md:w-2/3">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-48 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-400 text-sm font-bold border border-dashed border-gray-400 rounded-lg ml-6">
                    CHEMWATCH Logo
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
                  Chemwatch SDS
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-arabic">
                  أنظمة إدارة المواد والعناصر الكيميائية مدعومة بأكبر قاعدة
                  بيانات للمواد الكيميائية في العالم.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-arabic">
                  توفر Chemwatch إدارة SDS وتأليف SDS للحفاظ على تحديث أنظمة
                  الإدارة الكيميائية الخاصة بك. تحتفظ Chemwatch بأكبر قاعدة
                  بيانات للمواد الكيميائية في العالم ، مع أكثر من 3,215,992 مادة
                  ، و 140 مليون SDS (ورقة بيانات السلامة) ، وحلول تنظيمية
                  كيميائية تدعم المتطلبات المحلية والعالمية في أكثر من 90 دولة.
                  تعد Chemwatch الشركة الرائدة عالميًا في مجال حلول إدارة المواد
                  الكيميائية. يمنح الوصول إلى قاعدة البيانات الشاملة هذه العملاء
                  ميزة فريدة على غيرهم من مقدمي الخدمات الكيميائية.
                </p>
              </div>
              <div className="md:w-1/3 bg-emerald-50 dark:bg-emerald-900/20 p-8 flex items-center justify-center">
                <Shield
                  size={120}
                  className="text-emerald-200 dark:text-emerald-800 opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Chemicals Management Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 font-arabic">
                  إدارة المواد الكيميائية:
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium font-arabic">
                  توفر Chemwatch حلولاً شاملة لإدارة المواد الكيميائية ، مع
                  مجموعة من حزم البرامج المناسبة للشركات الصغيرة للمؤسسات
                  العالمية. يتضمن ذلك خدمات البيانات وعمليات التكامل مع أنظمة
                  تخطيط موارد المؤسسات (ERP) التابعة لجهات خارجية مثل SAP.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-arabic">
                  تشمل Chemwatch الميزات التالية:
                </h3>
                <ul className="space-y-3 font-arabic">
                  {[
                    "إدارة SDS",
                    "السجلات الكيميائية والبيانات",
                    "تقييمات المخاطر",
                    "التقارير والوثائق",
                    "خدمات البيانات",
                    "وضع العلامات ، وأكثر من ذلك بكثير!",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Zap
                        className="ml-3 text-amber-500 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 text-right">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-8 font-arabic">
                  منتجات Chemwatch:
                </h2>

                <div className="space-y-8">
                  <div className="border-r-4 border-emerald-500 pr-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
                      GoldFFX
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                      Image Placeholder
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-arabic">
                      برنامج يقدم حلول جرد المواد الكيميائية كاملة. بالإضافة إلى
                      صحيفة بيانات سلامة المواد (SDS) ، يتضمن ذلك تقارير تقييم
                      المخاطر وإنشاء الملصقات والسجلات الكيميائية والبيانات.
                    </p>
                  </div>

                  <div className="border-r-4 border-emerald-500 pr-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
                      Backpack
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                      Image Placeholder
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-arabic">
                      Backpack مكتبة سهلة الاستخدام عبر الإنترنت ل SDS الخاصة بك
                      ، مع تحديثات أسبوعية تلقائية. جربه مجانًا إذا كان لديك أقل
                      من 50 SDS للمحافظة عليه.
                    </p>
                  </div>

                  <div className="border-r-4 border-emerald-500 pr-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
                      Backpack Limited
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                      Image Placeholder
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-arabic">
                      تجربة مجانية لحقيبة الظهر ، حتى 50 مادة كيميائية. قم
                      بإنشاء نظام جرد المواد الكيميائية الخاص بك مجانًا
                    </p>
                  </div>

                  <div className="border-r-4 border-emerald-500 pr-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
                      CHEMERITUS
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                      Image Placeholder
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-arabic">
                      تجمع Chemeritus بين إدارة المواد الكيميائية وحلول سلسلة
                      التوريد الشاملة. ويشمل ذلك الموافقات والتقارير والوثائق ،
                      وتكنولوجيا SiSoT (المسح الضوئي في المسح الضوئي) ، وتكامل
                      واجهة برمجة تطبيقات خدمات الويب.
                    </p>
                  </div>

                  <div className="border-r-4 border-emerald-500 pr-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
                      COSHH COBRA
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                      Image Placeholder
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-arabic">
                      أكمل تقييمات مخاطر COSHH الشاملة في أقل من 30 ثانية!
                    </p>
                  </div>

                  <div className="border-r-4 border-emerald-500 pr-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
                      AuthorITe
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 font-arabic">
                      هي طريقة سهلة لتأليف صحيفة بيانات سلامة المواد للمنتجات
                      التي تقوم بتصنيعها.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 font-arabic">
                      مليئة بالمواد المصنفة مسبقًا وأدوات الاقتراح المفيدة
                      وطريقة خطوة بخطوة لتأليف وأرشفة وتحديث صحيفة بيانات سلامة
                      المواد الخاصة بك ، يلبي AuthorITe احتياجات الكيميائي
                      الحديث.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Applications Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mt-8 text-right">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 text-center underline font-arabic">
                  تطبيقات الهاتف الجوال
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-arabic">
                  Smarter Suite هو تطبيق جوال لإدارة المواد الكيميائية في
                  Chemwatch. فهو يجمع بين ميزات تطبيقاتنا الحالية ، SmartSuite و
                  SiSoT mobile ، مما يتيح إمكانية الوصول من موقع واحد. Smarter
                  Suite عبارة عن متجر شامل للعملاء للوصول إلى معلومات الصحة
                  والسلامة الشاملة ، بما في ذلك تقييمات المخاطر ، وإدارة مخزونهم
                  الكيميائي ، باستخدام التشفير الشريطي عبر SiSoT.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center font-arabic">
                      <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm ml-2">
                        1
                      </span>
                      تطبيق Smarter Suite:
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-700 h-40 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                      App Screenshot Placeholder
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-arabic">
                      تطبيق الهاتف المحمول الجديد الذي يجمع بين Smart Suite و
                      SiSoT Mobile في جهاز واحد. إدارة المواد الكيميائية وإدارة
                      الأصول في تطبيق واحد.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center font-arabic">
                      <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm ml-2">
                        2
                      </span>
                      تطبيق Smart AaaS (التدقيق كخدمة):
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-700 h-40 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                      App Screenshot Placeholder
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-arabic">
                      أداة Smart Audit New Service (AaaS) الجديدة من Chemwatch
                      هي الطريقة الأسهل للتدقيق في مخزون المواد الكيميائية
                      والمواد ، عن طريق إزالة الحاجة إلى إنشاء رموز شريطية خاصة
                      متوافقة مع أنظمة Chemwatch.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="bg-blue-900 text-white rounded-2xl shadow-xl p-8 mt-8 text-center font-arabic">
                <h3 className="text-2xl font-bold mb-4">
                  أنظمة إدارة المواد والعناصر الكيميائية مدعومة بأكبر قاعدة
                  بيانات للمواد الكيميائية في العالم.
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  مع الوصول إلى أكثر من 150 مليون صحيفة بيانات سلامة.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      14,500+
                    </div>
                    <div className="text-sm opacity-90">
                      الحفاظ على أكثر من 14500 عائلة كيميائية
                    </div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-400 mb-2">
                      3,000,000+
                    </div>
                    <div className="text-sm opacity-90">
                      أكثر من 3 مليون مادة كيميائية في مكتبتنا
                    </div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      150M+
                    </div>
                    <div className="text-sm opacity-90">
                      مليون صحيفة بيانات سلامة
                    </div>
                  </div>
                </div>

                <p className="text-lg mb-4 opacity-90">
                  الحلول التنظيمية الكيميائية التي تدعم المتطلبات المحلية
                  والعالمية
                </p>
                <p className="text-lg mb-8 opacity-90">
                  تستخدم منتجات وخدمات Chemwatch عالميا من قبل أكثر من 5000
                  مؤسسة.
                </p>

                <div className="pt-8 border-t border-blue-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-emerald-400 font-bold">49+</span> لغة
                    معتمدة.
                  </div>
                  <div>
                    <span className="text-emerald-400 font-bold">9,000+</span>{" "}
                    آلاف قائمة يحتفظ بها الفريق التنظيمي.
                  </div>
                  <div>
                    <span className="text-emerald-400 font-bold">123+</span> بلد
                    مدعومة بالمنتج .
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 text-right">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2 font-arabic">
                  وظائف ووحدات المراقبة الكيميائية
                </h3>
                <div className="space-y-4 font-arabic">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      واجهة المستخدم وشريط الأدوات الرئيسي:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      يتضمن جميع العناصر المرئية مثل الإعدادات والتعليم
                      الإلكتروني والمساعدة واللغة التي يتفاعل معها المستخدمون
                      للنظام.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      لوحة البحث عن المواد وشاشة المنتج:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      يسمح للمستخدمين بالعثور على معلومات حول المواد الكيميائية
                      والمنتجات من خلال البحث باستخدام معايير مختلفة مثل اسم
                      المنتج أو الاسم العلمي للمادة الكيميائية أو الصيغة
                      الكيميائية أو اسم الشركة المصنعة. تشير "شاشة المنتج" عادة
                      إلى عرض نتائج البحث ، ومن ثم يتم تحديد المادة الكيميائية
                      أو المنتج المراد البحث عنه.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      البحث عن المواد:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      يمكن تخصيص هذه الأعمدة عن طريق النقر بزر الماوس الأيمن
                      داخل الجدول. يوفر هذا الجدول موقعا مركزيا لعرض المعلومات
                      الكيميائية ذات الصلة بالبيان الخاص بك ، مع العلم بأن وجهات
                      النظر مصممة لتناسب الاحتياجات المحددة.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      شجرة المجلدات:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      حيث يمكنك تخزين المواد الخاصة بك بسرعة وسهولة طرح صحائف
                      بيانات السلامة المستخدمة من قبل مؤسستك ، سوف يستخدم دليل
                      المجلدات عند فصل المواد على أساس الإدارات الداخلية أو
                      تفاصيل غير محددة الموقع.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      نسخ صحائف بيانات السلامة:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      بمجرد العثور على المادة الصحيحة الخاصة بنا مع رقم الـ CAS
                      الصحيح، نحتاج إلى تحديد المادة للذهاب إلى جدول المستندات
                      لتحديد البائع. لا تحتاج الي نسخ مادة إلى مجلداتك من جدول
                      البحث عن المواد، ولكن ستقوم بنسخ جميع البائعين وصحيفة
                      بيانات السلامة الخاصة بهم لتلك المادة.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      تقييم المخاطر:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      تحدد وحدة تقييم المخاطر ما إذا كنت ستكمل تقييم المخاطر
                      بناء على معايير منظمة العمل الدولية للمواد الخطرة أو وفقا
                      لمعايير الأمم المتحدة للبضائع الخطرة.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      أرقام الأجزاء والأسماء المفضلة:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      يمكن إعطاء الأسماء المفضلة لمواد أو مستندات بائع محددة
                      ليتم استبدال اسم المادة في جدول البحث عن المواد.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      اعدادات التصفية:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      تسمح للمستخدمين بتحسين نتائج البحث وإدارة البيانات
                      الكيميائية بناءا على معايير مختلفة.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      اعدادات صحائف بيانات السلامة:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      تسمح للمتسخدم بتعيين نوع المعلومات التي سيتم عرضها في
                      صحيفة بيانات السلامة بالإضافة إلي تعيين البائعين المفضلين
                      لهذه المستندات.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      وصول المستخدم:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      تحتوي اعدادات الوصول على جميع الخطوات اللازمة لإنشاء
                      مستخدمين جدد وتعيين الأذونات، وتحديد وصول المستخدمين إلي
                      الموقع.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      الموافقات:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      تٌمكن الموافقات الشركات والمؤسسات من انشاء سير عمل يمكن من
                      خلاله فحص المواد الجديدة واخضاعها للموافقات.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      لوحة معلومات النظام:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      هي أداة لتحليل البيانات ، تتيح للمسؤولين والمستخدمين
                      المميزين عرض تمثيل مرئي للمعلومات عبر تطبيقات{" "}
                      <span dir="ltr">Chemwatch</span>.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      منشئ التقارير:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      تتيح هذه الاداة للمستخدم إنشاء تقرير مخصص لبيانه باستخدام
                      كمية محدودة من البيانات من المواد التي سيتم انشاؤها. سيتم
                      انشاء تقارير SDS من قاعدة البيانات.
                    </p>
                  </div>
                  <div>
                    <h4
                      className="font-bold text-gray-800 dark:text-white text-sm mb-1 text-right"
                      dir="ltr"
                    >
                      : Distributed Generation (D-Gen) Module
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      يمكنك البحث عن مادة باستخدام لوحة الشاشة او البحث عن مادة
                      موجودة في مجلداتك باستخدام شجرة المجلدات.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      وحدة الخدمات اللوجيستية – <span dir="ltr">4PL</span> :
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      تضمن هذه الأداة النقل الآمن للبضائع من خلال تقديم ارشادات
                      التعبئة والتغليف.
                    </p>
                  </div>
                  <div>
                    <h4
                      className="font-bold text-gray-800 dark:text-white text-sm mb-1 text-right"
                      dir="ltr"
                    >
                      : Waste Management Module
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      تبسيط عملية التتبع والامتثال لقواعد بيانات سلامة للنفايات،
                      واكودها، والتعريفات التي يقدمها الكيميائيون المعتمدون.
                      استفد من التتبع المتقدم لدورة الحياة، وتقييمات عبء
                      النفايات، وإعداد التقارير بما يتماشى مع{" "}
                      <span dir="ltr">CSRD</span> و{" "}
                      <span dir="ltr">GRI 306</span> .
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                      وحدة النظافة الصناعية:
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      رفع مستوى تقييمات المخاطر من خلال المراقبة في الوقت
                      الفعلي، ورؤى لوحة المعلومات، والتنبيهات الفورية عندما
                      تقترب المواقع من الحدود التنظيمية ، وتساعد مسارت التدقيق
                      الكاملة في تحليل السبب الجذري، بينما تحدد التنبيهات
                      القائمة المخاطر الإنجابية المحتملة وتقترح ضوابط إدارية.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
