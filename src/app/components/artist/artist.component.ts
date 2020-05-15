import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  loading: boolean = true;

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    router.params.subscribe(params => {
      this.getArtist(params.id)
    });
  }

  ngOnInit(): void {
  }

  getArtist(id: string) {
    this.spotifyService.getArtist(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    });
  }

}
