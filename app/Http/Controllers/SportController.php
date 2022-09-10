<?php

namespace App\Http\Controllers;

use App\Interfaces\SportRepositoryInterface;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpKernel\Exception\HttpException;

class SportController extends Controller
{
    private SportRepositoryInterface $sportRepository;

    public function __construct(SportRepositoryInterface $sportRepository)
    {
        $this->sportRepository = $sportRepository;
    }

    public function index(): JsonResponse
    {
        try{
            $result = $this->sportRepository->getAllSports();
        }catch(Exception $ex){
            throw new HttpException(500, $ex->getMessage());
        }

        return response()->json([
            'data' => $result
        ]);
    }

}