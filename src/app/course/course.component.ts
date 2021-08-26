import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses : Course[] = [
    {
      id:1,
      title: "Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)",
      description: "2 ay sürecek ücretsiz ve profesyonel bir programla, sıfırdan yazılım geliştirme öğreniyoruz.",
      imagePath: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Zk7d1MdoSJ6cEShVbfd0",
      instructor: "Engin Demiroğ",
      instructorImg: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/GsqiGFGCRmuBuel0qqF3",
      completeRate: "%25 Tamamlandı"
    },
    {
      id:2,
      title: "Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)",
      description: "2 ay sürecek ücretsiz ve profesyonel bir programla, sıfırdan yazılım geliştirme öğreniyoruz.",
      imagePath: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/qi4s19xSKCmtaaRUqUFI",
      instructor: "Engin Demiroğ",
      instructorImg: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/GsqiGFGCRmuBuel0qqF3",
      completeRate: "%55 Tamamlandı"
    },
    {
      id:3,
      title: "Programlamaya Giriş İçin Temel Kurs (C#, Java, Python, JavaScript)",
      description: "PYTHON, JAVA, C# gibi tüm programlama dilleri için temel programlama mantığını anlaşılır örneklerle öğrenin.",
      imagePath: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/BBLmG3XFTtm8XBTrzg4v",
      instructor: "Engin Demiroğ",
      instructorImg: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/GsqiGFGCRmuBuel0qqF3",
      completeRate: "%80 Tamamlandı"
    },
    

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
