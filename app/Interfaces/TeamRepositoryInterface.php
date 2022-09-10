<?php

namespace App\Interfaces;

interface TeamRepositoryInterface {
    public function getTeamsByLeague(string $leagueSlug);
}