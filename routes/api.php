<?php

use App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('sports', [Controllers\SportController::class, 'index']);
Route::get('leagues', [Controllers\LeagueController::class, 'index']);
Route::get('teams', [Controllers\TeamController::class, 'index']);
