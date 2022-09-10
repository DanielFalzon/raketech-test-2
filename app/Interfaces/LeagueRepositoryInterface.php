<?php

namespace App\Interfaces;

interface LeagueRepositoryInterface {
    public function getAllLeagues();
    public function getLeagueBySport(?string $sportSlug);
}