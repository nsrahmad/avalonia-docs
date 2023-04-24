"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[1680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={},r="The Model-View-ViewModel Pattern (MVVM)",l={unversionedId:"getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",id:"getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",title:"The Model-View-ViewModel Pattern \\(MVVM\\)",description:"As well as writing code in code-behind, Avalonia supports using the Model-View-ViewModel pattern \\(or MVVM\\). MVVM is a common way to structure UI applications that separates view logic from application logic in a way that allows your applications to become unit-testable.",source:"@site/docs/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm.md",sourceDirName:"getting-started/programming-with-avalonia",slug:"/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",permalink:"/docs/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Programming with Avalonia",permalink:"/docs/getting-started/programming-with-avalonia/"},next:{title:"Controls & Layouts",permalink:"/docs/getting-started/programming-with-avalonia/controls-and-layouts"}},p={},d=[],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-model-view-viewmodel-pattern-mvvm"},"The Model-View-ViewModel Pattern ","(","MVVM",")"),(0,i.kt)("p",null,"As well as writing code in code-behind, Avalonia supports using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/guides/basics/mvvm"},"Model-View-ViewModel")," pattern ","(","or MVVM",")",". MVVM is a common way to structure UI applications that separates view logic from application logic in a way that allows your applications to become unit-testable."),(0,i.kt)("p",null,"MVVM relies upon Avalonia's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding/bindings"},"binding")," capabilities to separate your application into a View layer which displays standard Avalonia windows and controls, and a ViewModel layer which defines the functionality of the application independently of Avalonia itself. "),(0,i.kt)("p",null,"The following example shows the code from the previous example implemented using the MVVM pattern:"),(0,i.kt)("p",null,'{% tabs %}\n{% tab title="XAML" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication1.MainWindow"\n        Title="Window with Button"\n        Width="250" Height="100">\n\n  \x3c!-- Add button to window --\x3e\n  <Button Content="{Binding ButtonText}" Command="{Binding ButtonClicked}"/>\n\n</Window>\n')),(0,i.kt)("p",null,"{% endtab %}"),(0,i.kt)("p",null,'{% tab title="C',"#",'" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.ComponentModel;\nusing Avalonia.Controls;\nusing Avalonia.Markup.Xaml;\n\nnamespace AvaloniaApplication1\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n            DataContext = new MainWindowViewModel();\n        }\n    }\n\n    public class MainWindowViewModel : INotifyPropertyChanged\n    {\n        string buttonText = "Click Me!";\n\n        public string ButtonText\n        {\n            get => buttonText;\n            set \n            {\n                buttonText = value;\n                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(ButtonText)));\n            }\n        }\n\n        public event PropertyChangedEventHandler PropertyChanged;\n\n        public void ButtonClicked() => ButtonText = "Hello, Avalonia!";\n    }\n}\n')),(0,i.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,i.kt)("p",null,"In this example, the code-behind assigns the ",(0,i.kt)("inlineCode",{parentName:"p"},"Window"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding/the-datacontext"},(0,i.kt)("inlineCode",{parentName:"a"},"DataContext"))," property to an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel"),". The XAML then uses an Avalonia ",(0,i.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding/bindings"},(0,i.kt)("inlineCode",{parentName:"a"},"{Binding}"))," to bind the ",(0,i.kt)("inlineCode",{parentName:"p"},"Button"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Content")," property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonText")," property on the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel"),". It also binds the ",(0,i.kt)("inlineCode",{parentName:"p"},"Button"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding/binding-to-commands"},(0,i.kt)("inlineCode",{parentName:"a"},"Command"))," property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonClicked")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel"),"."),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," is clicked it invokes its ",(0,i.kt)("inlineCode",{parentName:"p"},"Command"),", causing the bound ",(0,i.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel.ButtonClicked")," method to be called. This method then sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonText")," property which raises the ",(0,i.kt)("inlineCode",{parentName:"p"},"INotifyPropertyChanged.PropertyChanged")," event, causing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," to re-read its bound value and update the UI."))}m.isMDXComponent=!0}}]);