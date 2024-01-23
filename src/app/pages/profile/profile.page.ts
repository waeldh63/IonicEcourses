import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private ProfileService: ProfileService,
    private alertController: AlertController
  ) {}
  public userProfile: any = [];
  public FirstName: any;
  public LastName: any;
  public AboutYourself: any;
  public YourRole: any;
  public IsStudent: any;
  public Experience: any;
  public Expertise: any;

  showAlert: boolean = false;
  ngOnInit() {
    this.userProfile = this.ProfileService.getProfile(); // in this page we get all data and we save it in local var to give it as a value for inputs
    this.FirstName = this.userProfile.FirstName;
    this.LastName = this.userProfile.LastName;
    this.AboutYourself = this.userProfile.AboutYourself;
    this.YourRole = this.userProfile.YourRole;
    this.IsStudent = this.userProfile.IsStudent;
    this.Experience = this.userProfile.Experience;
    this.Expertise = this.userProfile.Expertise;
  }

  setIsStudent(event: CustomEvent) {
    // we trigger to change the IsStudent bool in the user profile to hide the exprence and the expertise
    this.IsStudent = event.detail.value;
    this.ProfileService.isStudentChanged(this.IsStudent);
  }

  setExperience(event: CustomEvent) {
    // we set the value
    this.Experience = event.detail.value;
  }
  setExpertise(event: CustomEvent) {
    // we set the value
    this.Expertise = event.detail.value;
  }
  setFirstName(event: CustomEvent) {
    // we set the value
    this.FirstName = event.detail.value;
  }
  setLastName(event: CustomEvent) {
    // we set the value
    this.LastName = event.detail.value;
  }

  setAboutYourself(event: CustomEvent) {
    // we set the value
    this.AboutYourself = event.detail.value;
  }
  setYourRole(event: CustomEvent) {
    // we set the value
    this.YourRole = event.detail.value;
  }

  setProfileDetails() {
    // here we send the data after making sure in the html file that the mandatory field is not null
    this.ProfileService.setProfileDetails(
      this.FirstName,
      this.LastName,
      this.AboutYourself,
      this.YourRole,
      this.IsStudent,
      this.Experience,
      this.Expertise
    );
  }

  async presentAlert() {
    // if the mandatory field is null we alert the user
    const alert = await this.alertController.create({
      header: 'Mandatory Field',
      message: 'Fisrt Name Field Cannot be null.',
      buttons: this.alertButtons(),
    });

    await alert.present();
  }

  alertButtons() {
    return [
      {
        text: 'OK',
        handler: () => {
          this.showAlert = false; // Hide the alert after clicking OK
        },
      },
    ];
  }
}
