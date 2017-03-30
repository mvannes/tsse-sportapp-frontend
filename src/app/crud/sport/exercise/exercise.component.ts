import {Component, OnInit} from '@angular/core';
import {Exercise} from "./exercise";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  exercises: Exercise[] = [
    new Exercise(1, "idw", "desc", "cat", ["media", "medi77a2", "m7777edia2", "m7777edia2", "me777777dia2"]),
    new Exercise(2, "idw", "desc", "cat", ["media", "media2"]),
    new Exercise(1, "Patience", "Wylie", "eu.arcu.Morbi@nibhPhasellus.com", ["media", "media2"]),
    new Exercise(2, "Kirsten", "Noah", "ac.sem.ut@semvitae.co.uk", ["media", "media2"]),
    new Exercise(3, "Irene", "Wing", "urna.justo@idnuncinterdum.com", ["media", "media2"]),
    new Exercise(4, "Reagan", "Blaze", "Duis@Nunclaoreetlectus.co.uk", ["media", "media2"]),
    new Exercise(5, "Iliana", "Randall", "egestas@Aliquamultrices.edu", ["media", "media2"]),
    new Exercise(6, "Nayda", "Hyatt", "Phasellus.nulla.Integer@Nulla.org", ["media", "media2"]),
    new Exercise(7, "April", "Robert", "mi.tempor@ut.org", ["media", "media2"]),
    new Exercise(8, "Lillith", "Kane", "sollicitudin.a@vel.ca", ["media", "media2"]),
    new Exercise(9, "Sara", "catOrlando", "at.iaculis@Phasellusin.org", ["media", "media2"]),
    new Exercise(10, "Karen", "Keegan", "ullamcorper.magna@consectetuer.com", ["media", "media2"]),
    new Exercise(11, "Brianna", "Charles", "dictum.augue@MorbimetusVivamus.net", ["media", "media2"]),
    new Exercise(12, "Lois", "Fuller", "magnis@vel.co.uk", ["media", "media2"]),
    new Exercise(13, "Dai", "catNolan", "amet.faucibus@posuereenim.co.uk", ["media", "media2"]),
    new Exercise(14, "Cameran", "Talon", "magna.Praesent@sitametdiam.org", ["media", "media2"]),
    new Exercise(15, "Kendall", "Simon", "ligula.consectetuer.rhoncus@ami.net", ["media", "media2"]),
    new Exercise(16, "Nayda", "Nicholas", "nascetur.ridiculus.mus@fermentumconvallisligula.net", ["media", "media2"]),
    new Exercise(17, "Phoebe", "Ryder", "libero.lacus.varius@ullamcorperDuisat.com", ["media", "media2"]),
    new Exercise(18, "Lucy", "Herrod", "enim.commodo@faucibus.com", ["media", "media2"]),
    new Exercise(19, "Kitra", "Cullen", "Fusce.fermentum@nonenim.co.uk", ["media", "media2"]),
    new Exercise(20, "Celeste", "Simon", "at.sem@cursusInteger.net", ["media", "media2"])
  ];

}
