import { Component, OnInit } from '@angular/core';
import { PickerOptions } from '@ionic/core';
import { PickerController, AlertController} from '@ionic/angular';
import { Store, Select } from '@ngxs/store';
import { LoadData, SetFilterData, SetFilterArea } from 'src/app/store/covid.actions';
import { CovidDataState } from 'src/app/store/covid.state';
import { ICovidData } from 'src/app/store/covid.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.page.html',
  styleUrls: ['./covid.page.scss'],
})
export class CovidPage implements OnInit {

  public minDate = '2020-02-24';
  public maxDate = new Date().toISOString();
  public prevDay: string;
  public lastUpdate: string;
  public area: number;
  private areaIndex: number;
  public historyDeceduti = [];
  public historyGuariti = [];
  public historyTerapia = [];
  public historyRicoverati = [];
  public historyDomicilio = [];
  public historyPositivi = [];


  @Select(CovidDataState.getLastUpdate)
  public lastUpdate$: Observable<any>;

  @Select(CovidDataState.getHistory)
  public history$: Observable<any>;

  @Select(CovidDataState.getData)
  public day$: Observable<string>;

  @Select(CovidDataState.getPrevDay)
  public prevDay$: Observable<string>;

  @Select(CovidDataState.getCovidData(false))
  public last$: Observable<ICovidData>;

  @Select(CovidDataState.getCovidData(true))
  public prev$: Observable<ICovidData>;

  @Select(CovidDataState.getArea)
  public area$: Observable<number>;

  @Select(CovidDataState.getLastArea)
  public lastArea$: Observable<string>;

  constructor(
    private store: Store,
    private pickerController: PickerController,
    private alertController: AlertController ) { }

  ngOnInit() {
    this.updateFilterData(this.maxDate);
    this.loadData();
    this.lastUpdate$.subscribe((value) => {
      this.lastUpdate = value;
    });
    this.prevDay$.subscribe((value) => {
      this.prevDay = value;
    });
    this.area$.subscribe((value) => { this.area = value; });
    this.history$.subscribe((value) => {
      this.historyDeceduti = [{
        name: 'deceduti',
        series: value.deceduti
      }];
      this.historyGuariti = [{
        name: 'guariti',
        series: value.guariti
      }];
      this.historyTerapia = [{
        name: 'terapia intensiva',
        series: value.terapia
      }];
      this.historyRicoverati = [{
        name: 'Ricoverati con Sintomi',
        series: value.ricoverati
      }];
      this.historyDomicilio = [{
        name: 'Isolamento Domiciliare',
        series: value.domicilio
      }];
      this.historyPositivi = [{
        name: 'Totale Casi',
        series: value.totale
      }, {
        name: 'Positivi',
        series: value.positivi
      }];
    });
  }

  async showPicker() {
    const options: PickerOptions = {
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel'
        },
        {
          text: 'Conferma',
          handler: (value: any) => {
            this.store.dispatch(new SetFilterArea({ denominazione: value.Area.text, area: value.Area.value}));
          }
        }
      ],
      columns: [{
        name: 'Area',
        options: await this.getColumnOptions()
      }]
    };

    const picker = await this.pickerController.create(options);
    picker.columns[0].selectedIndex = this.areaIndex;
    picker.present();
  }

  async getColumnOptions() {
    const regioni = [
      ['Tutta Italia', 0],
      ['Abruzzo', 13],
      ['Basilicata', 17],
      ['P.A. Bolzano', 40],
      ['Calabria', 18],
      ['Campania', 15],
      ['Emilia-Romagna', 8],
      ['Friuli Venezia Giulia', 6],
      ['Lazio', 12],
      ['Liguria', 7],
      ['Lombardia', 3],
      ['Marche', 11],
      ['Molise', 14],
      ['Piemonte', 1],
      ['Puglia', 16],
      ['Campania', 15],
      ['Sardegna', 20],
      ['Sicilia', 19],
      ['Toscana', 9],
      ['P.A. Trento', 4],
      ['Umbria', 10],
      ['Valle d\'Aosta', 2],
      ['Veneto', 5],
    ];
    const options = [];
    let tmpAreaIndex = 0;
    regioni.forEach(x => {
      options.push({text: x[0], value: x[1], selected: (x[1] === this.area) });
      if (x[1] === this.area) { this.areaIndex = tmpAreaIndex; }
      tmpAreaIndex++;
    });
    return options;
  }

  updateFilterData(value: any) {
    this.store.dispatch(new SetFilterData(value));
  }

  async loadData() {
    this.store.dispatch(new LoadData());
  }

  async showBox() {
    const alert = await this.alertController.create({
      header: 'COV-IT',
      subHeader: '#IO RESTO A CASA',
      message: `<p>Privacy: Questa App non traccia alcun dato.</P>
          <p>Fonte Dati: Progetto github covid-19 del pcm-DPC</p><p>App realizzata da Francesco Bozzotta</p>
          <p>Per Suggerimenti o segnalazioni <a href="mailto:info@silicia.it">inviate un email</a>`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
